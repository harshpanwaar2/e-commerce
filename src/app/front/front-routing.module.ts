import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "shop", component: ShopPageComponent },
  { path: "product", component: SingleProductComponent },
  { path: "testimonial", component: TestimonialPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
