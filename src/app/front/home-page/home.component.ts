import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomePageComponent {
  maincategory: any = []
  products: any = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    navSpeed: 700,
    items: 1,
    nav: false
  }

  constructor(private dataService: DataService) {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response.filter((x:any)=>x.active)
    })
    this.dataService.getProduct().subscribe((response:any)=>{
      this.products = response.filter((x:any)=>x.active)
    })
  }

}
