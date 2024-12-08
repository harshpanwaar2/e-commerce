import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  user:string,
  orderStatus: string,
  paymentMode:string,
  paymentStatus:string,
  subtotal:number,
  shipping:number,
  total:number,
  date :string
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getCheckout().subscribe((response: any) => {
      this.data = response
    })
  }

  // deleteRecord(id: string) {
  //   if (window.confirm("Are You Sure to delete that Record : ")) {
  //     this.dataService.deleteCheckout(id).subscribe((response: any) => {
  //       this.getAPIData()
  //     })
  //   }
  // }
}
