import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import e from 'express';
@Component({
  selector: 'app-checkout-show',
  templateUrl: './checkout-show.component.html',
  styleUrl: './checkout-show.component.css'
})
export class CheckoutShowComponent {
  data: any = {}
  apiUrl = environment.apiUrl
  id = ""

  orderStatus = ""
  paymentStatus = ""
  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute, private router: Router) {
    this.getAPIData()
  }

  getAPIData() {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleCheckout(params.id).subscribe((response: any) => {
        this.data = response
        this.orderStatus = response.orderStatus
        this.paymentStatus = response.paymentStatus
      })
    })
  }

  getInputData(event: any) {
    let { name, value } = event.target
    if (name === "orderStatus")
      this.orderStatus = value
    else
      this.paymentStatus = value
  }

  // deleteRecord() {
  //   if (window.confirm("Are You Sure to delete that Record : ")) {
  //     this.dataService.deleteCheckout(this.id).subscribe((response: any) => {
  //       this.router.navigate(['/admin/checkout'])
  //     })
  //   }
  // }

  updateRecord() {
    if (window.confirm("Are You Sure to Update Status of that Record : ")) {
      this.dataService.updateCheckout({ ...this.data, orderStatus: this.orderStatus, paymentStatus: this.paymentStatus }).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }
}
