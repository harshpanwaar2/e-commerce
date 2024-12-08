import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from '../../../../environments/environment';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  apiUrl= environment.apiUrl
  data: any = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    navSpeed: 700,
    items: 4.5,
    nav: false
  }
  
  constructor( private dataService:DataService){
    this.dataService.getTestimonial().subscribe((response:any)=>{
      this.data = response.filter((x:any)=>x.active)
    })
  }

}
