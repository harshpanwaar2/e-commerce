import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule} from 'ngx-owl-carousel-o';

import { FrontRoutingModule } from './front-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import { AboutComponent } from './components/about/about.component';
import { FactComponent } from './components/fact/fact.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';


import { HomePageComponent } from './home-page/home.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductSliderComponent,
    AboutComponent,
    FactComponent,
    TestimonialComponent,
    HeroComponent,
    ProductsComponent,


    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    ShopPageComponent,
    TestimonialPageComponent,
    SingleProductComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  exports:[
  NavbarComponent,
  FooterComponent,
  HeroComponent,
  ]
})
export class FrontModule { }
