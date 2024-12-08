import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MaincategoryComponent } from './maincategory/maincategory/maincategory.component';
import { UpdateMaincategoryComponent } from './maincategory/update-maincategory/update-maincategory.component';
import { CreateMaincategoryComponent } from './maincategory/create-maincategory/create-maincategory.component';
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
import { NewsletterComponent } from './newsletter/newsletter/newsletter.component';
import { UserComponent } from './user/user/user.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { ContactusShowComponent } from './contactus/contactus-show/contactus-show.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { CheckoutShowComponent } from './checkout/checkout-show/checkout-show.component';
import { adminGuard } from '../auth/admin.guard';

const routes: Routes = [
  { path: "", canActivate:[adminGuard], component: HomeComponent },


  { path: "maincategory",canActivate:[adminGuard], component: MaincategoryComponent },
  { path: "maincategory/create",canActivate:[adminGuard], component: CreateMaincategoryComponent },
  { path: "maincategory/update",canActivate:[adminGuard], component: UpdateMaincategoryComponent },

  { path: "subcategory",canActivate:[adminGuard], component: SubcategoryComponent },
  { path: "subcategory/create",canActivate:[adminGuard], component: CreateSubcategoryComponent },
  { path: "subcategory/update",canActivate:[adminGuard], component: UpdateSubcategoryComponent },

  { path: "brand",canActivate:[adminGuard], component: BrandComponent },
  { path: "brand/create",canActivate:[adminGuard], component: CreateBrandComponent },
  { path: "brand/update",canActivate:[adminGuard], component: UpdateBrandComponent },

  { path: "testimonial",canActivate:[adminGuard], component: TestimonialComponent },
  { path: "testimonial/create",canActivate:[adminGuard], component: CreateTestimonialComponent },
  { path: "testimonial/update",canActivate:[adminGuard], component: UpdateTestimonialComponent },

  { path: "product",canActivate:[adminGuard], component: ProductComponent },
  { path: "product/create",canActivate:[adminGuard], component: CreateProductComponent },
  { path: "product/update",canActivate:[adminGuard], component: UpdateProductComponent },

  { path: "newsletter",canActivate:[adminGuard], component: NewsletterComponent },

  { path: "user",canActivate:[adminGuard], component: UserComponent },

  { path: "contactus",canActivate:[adminGuard], component: ContactusComponent },
  { path: "contactus/show",canActivate:[adminGuard], component: ContactusShowComponent },

  { path: "checkout",canActivate:[adminGuard], component: CheckoutComponent },
  { path: "checkout/show",canActivate:[adminGuard], component: CheckoutShowComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
