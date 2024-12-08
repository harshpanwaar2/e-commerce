import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  apiUrl= environment.apiUrl
  data: any = []

  @Input() maincategory: any
  @Input() products: any
  @Input() flag:any
  @Input() title:any
  constructor(){}

  ngOnChanges(){
    if(this.title){
      this.data = this.products?.slice(0,8)
    }
    else if(this.maincategory){
    this.data = this.products?.filter((x:any)=>x.maincategory === this.maincategory && x.active).slice(0,24)
    }else{
    this.data = this.products.filter((x:any)=>x.active)
  }
}

}
