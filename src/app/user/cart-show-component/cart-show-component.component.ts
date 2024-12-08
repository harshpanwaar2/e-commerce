import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart-show-component',
  templateUrl: './cart-show-component.component.html',
  styleUrl: './cart-show-component.component.css'
})
export class CartShowComponentComponent {
  @Input()cart:any
  apiUrl = environment.apiUrl
}
