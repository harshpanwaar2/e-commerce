import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home/home.component';
import { MaincategoryComponent } from './maincategory/maincategory/maincategory.component';
import { CreateMaincategoryComponent } from './maincategory/create-maincategory/create-maincategory.component';
import { UpdateMaincategoryComponent } from './maincategory/update-maincategory/update-maincategory.component';
import { FrontModule } from '../front/front.module';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubcategoryComponent } from './subcategory/subcategory/subcategory.component';
import { CreateSubcategoryComponent } from './subcategory/create-subcategory/create-subcategory.component';
import { UpdateSubcategoryComponent } from './subcategory/update-subcategory/update-subcategory.component';
import { BrandComponent } from './brand/brand/brand.component';
import { CreateBrandComponent } from './brand/create-brand/create-brand.component';
import { UpdateBrandComponent } from './brand/update-brand/update-brand.component';
import { TestimonialComponent } from './testimonial/testimonial/testimonial.component';
import { CreateTestimonialComponent } from './testimonial/create-testimonial/create-testimonial.component';
import { UpdateTestimonialComponent } from './testimonial/update-testimonial/update-testimonial.component';
import { ProductComponent } from './product/product/product.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { UserModule } from '../user/user.module';
import { NewsletterComponent } from './newsletter/newsletter/newsletter.component';
import { UserComponent } from './user/user/user.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { ContactusShowComponent } from './contactus/contactus-show/contactus-show.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { CheckoutShowComponent } from './checkout/checkout-show/checkout-show.component';


@NgModule({
  declarations: [
    HomeComponent,
    MaincategoryComponent,
    CreateMaincategoryComponent,
    UpdateMaincategoryComponent,
    SidebarComponent,
    SubcategoryComponent,
    CreateSubcategoryComponent,
    UpdateSubcategoryComponent,
    BrandComponent,
    CreateBrandComponent,
    UpdateBrandComponent,
    TestimonialComponent,
    CreateTestimonialComponent,
    UpdateTestimonialComponent,
    ProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    NewsletterComponent,
    UserComponent,
    ContactusComponent,
    ContactusShowComponent,
    CheckoutComponent,
    CheckoutShowComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FrontModule,
    ReactiveFormsModule,
    UserModule,
]
})
export class AdminModule { }
