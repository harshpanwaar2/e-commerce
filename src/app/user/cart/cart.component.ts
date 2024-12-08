import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  apiUrl = environment.apiUrl
  cart: any = []
  subtotal = 0
  shipping = 0
  total = 0
  mode = "COD"
  @Input() title: any
  constructor(private dataService: DataService, private storage: StorageService, private router: Router) {
    this.getAPIData()
  }

  getAPIData() {
    this.subtotal = 0
    this.shipping = 0
    this.total = 0
    this.dataService.getCart().subscribe((response: any) => {
      this.cart = response.filter((x: any) => x.user == this.storage.getLocalStorage("userid"))
      this.cart.forEach((x: any) => this.subtotal = this.subtotal + x.total)
      if (this.subtotal > 0 && this.subtotal < 1000) {
        this.shipping = 150
        this.total = this.subtotal + 150
      }
      else
        this.total = this.subtotal
    })
  }

  deleteRecord(id: any) {
    if (window.confirm("Are You Sure to Remove that Item from Cart")) {
      this.dataService.deleteCart(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }

  updateRecord(id: any, option: any) {
    let item = this.cart.find((x: any) => x.id === id)
    console.log(item);

    if (item.qty == 1 && option === "DEC")
      return
    else if (option === "DEC") {
      item.qty = item.qty - 1
      item.total = item.total - item.price
    }
    else if (item.qty < item.stockQuantity) {
      item.qty = item.qty + 1
      item.total = item.total + item.price
    }
    this.dataService.updateCart({ ...item }).subscribe((response) => {
      this.getAPIData()
    })
  }

  getMode(event: any) {
    this.mode = event.target.value
  }

  placeOrder() {
    let item = {
      user: this.storage.getLocalStorage("userid"),
      orderStatus: "Order is Placed",
      paymentMode: this.mode,
      paymentStatus: "Pending",
      subtotal: this.subtotal,
      shipping: this.shipping,
      total: this.total,
      date: new Date(),
      products: this.cart
    }
    this.dataService.createCheckout(item).subscribe((response: any) => {
      this.cart.forEach((x: any) => {
        this.dataService.getSingleProduct(x.product).subscribe((response: any) => {
          let product = response
          product['stockQuantity'] = product['stockQuantity'] - x.qty
          product['stock'] = product['stockQuantity'] === 0 ? false : true
          this.dataService.updateProduct(product).subscribe((response: any) => { })
        })
        this.dataService.deleteCart(x.id).subscribe((response: any) => { })
      })
      this.router.navigate(['/user/confirmation'])
    }
    )
  }
}
