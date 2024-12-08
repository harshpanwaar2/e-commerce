import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FrontModule } from "../front/front.module";
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { CartShowComponentComponent } from './cart-show-component/cart-show-component.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileComponentComponent,
    UpdateProfileComponent,
    CartComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ConfirmationPageComponent,
    CartShowComponentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FrontModule,
    ReactiveFormsModule
  ],
  exports:[
    ProfileComponentComponent,
    CartShowComponentComponent
  ]
})
export class UserModule { }
