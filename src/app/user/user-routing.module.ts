import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { buyerGuard } from '../auth/buyer.guard';

const routes: Routes = [
  {path:"", canActivate: [buyerGuard] ,component:ProfileComponent},
  {path:"update-profile", canActivate: [buyerGuard] ,component:UpdateProfileComponent},
  {path:"cart", canActivate: [buyerGuard] ,component:CartPageComponent},
  {path:"checkout", canActivate: [buyerGuard] ,component:CheckoutPageComponent},
  {path:"confirmation", canActivate: [buyerGuard] ,component:ConfirmationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
