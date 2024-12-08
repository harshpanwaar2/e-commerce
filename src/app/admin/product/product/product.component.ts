import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  name: string,
  maincategory: string,
  subcategory: string,
  brand: string,
  color: string,
  size: string,
  basePrice: Number,
  discount: Number,
  finalPrice: Number,
  stockQuantity: Number,
  stock: boolean,
  description: string,
  pic: string,
  active: boolean
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getProduct().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Item : ")) {
      this.dataService.deleteProduct(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }


}
