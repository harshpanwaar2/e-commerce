import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.css'
})
export class ProductSliderComponent {
  apiUrl= environment.apiUrl
  data: any = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    navSpeed: 700,
    items: 4.5,
    nav: false
  }

  @Input() maincategory: any
  @Input() products: any
  constructor(){}

  ngOnChanges(){
    this.data = this.products?.filter((x:any)=>x.maincategory === this.maincategory)
    
  }


}
