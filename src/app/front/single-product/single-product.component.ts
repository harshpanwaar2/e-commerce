import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  apiUrl = environment.apiUrl
  data: any = { pic: [] }
  relatedProducts: any = []
  id: string = ""
  qty: number = 1
  htmlData: any

  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router, private storage: StorageService) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getProduct().subscribe((response: any) => {
        this.data = response.find((x: any) => x.id === this.id)
        this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.data.description ?? "")
        this.relatedProducts = response.filter((x: any) => x.active && x.maincategory === this.data.maincategory)
      })
    })
  }

  decrement() {
    if (this.qty > 1)
      this.qty--
  }
  increment() {
    if (this.qty < this.data.stockQuantity)
      this.qty++
  }


  addToCart() {
    if (this.storage.getLocalStorage("login")) {
      this.dataService.getCart().subscribe((response: any) => {
        let item = response.find((x: any) => x.product === this.id && x.user === this.storage.getLocalStorage("userid"))
        if (!item) {
          let item = {
            product: this.id,
            user: this.storage.getLocalStorage("userid"),
            name: this.data.name,
            brand: this.data.brand,
            color: this.data.color,
            size: this.data.size,
            price: this.data.finalPrice,
            stockQuantity: this.data.stockQuantity,
            qty: this.qty,
            total: this.data.finalPrice * this.qty,
            pic: this.data.pic[0],
          }
          this.dataService.createCart(item).subscribe((response: any) => {
            this.router.navigate(['user/cart'])
          })
        }
        else
          this.router.navigate(['user/cart'])
      })
    }
    else {
      this.router.navigate(['/login'])
    }
  }
  addToWishlist() {
    if (this.storage.getLocalStorage("login")) {
      this.dataService.getWishlist().subscribe((response: any) => {
        let item = response.find((x: any) => x.product === this.id && x.user === this.storage.getLocalStorage("userid"))
        if (!item) {
          let item = {
            product: this.id,
            user: this.storage.getLocalStorage("userid"),
            name: this.data.name,
            brand: this.data.brand,
            color: this.data.color,
            size: this.data.size,
            price: this.data.finalPrice,
            pic: this.data.pic[0],
          }
          this.dataService.createWishlist(item).subscribe((response: any) => {
            this.router.navigate(['user'])
          })
        }
        else
          this.router.navigate(['user'])
      })
    }
    else {
      this.router.navigate(['/login'])
    }
  }
}
