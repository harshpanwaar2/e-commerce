import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "http://localhost:8000"

  constructor(private http: HttpClient) { }


  // maincategory API calling method

  getMaincategory() {
    return this.http?.get(`${this.url}/maincategory`)
  }

  createMaincategory(data: any) {
    return this.http?.post(`${this.url}/maincategory`, data)
  }

  getSingleMaincategory(id: any) {
    return this.http?.get(`${this.url}/maincategory/${id}`)

  }

  updateMaincategory(data: any) {
    return this.http?.put(`${this.url}/maincategory/${data.id}`, data)
  }
  deleteMaincategory(id: any) {
    return this.http.delete(`${this.url}/maincategory/${id}`)
  }


   // subcategory API calling method

   getSubcategory() {
    return this.http.get(`${this.url}/subcategory`)
  }

  createSubcategory(data: any) {
    return this.http.post(`${this.url}/subcategory`, data)
  }

  getSingleSubcategory(id: any) {
    return this.http.get(`${this.url}/subcategory/${id}`)

  }

  updateSubcategory(data: any) {
    return this.http.put(`${this.url}/subcategory/${data.id}`, data)
  }
  deleteSubcategory(id: any) {
    return this.http.delete(`${this.url}/subcategory/${id}`)
  }

   // brand API calling method

   getBrand() {
    return this.http.get(`${this.url}/brand`)
  }

  createBrand(data: any) {
    return this.http.post(`${this.url}/brand`, data)
  }

  getSingleBrand(id: any) {
    return this.http.get(`${this.url}/brand/${id}`)

  }

  updateBrand(data: any) {
    return this.http.put(`${this.url}/brand/${data.id}`, data)
  }
  deleteBrand(id: any) {
    return this.http.delete(`${this.url}/brand/${id}`)
  }


   // product API calling method

   getProduct() {
    return this.http.get(`${this.url}/product`)
  }

  createProduct(data: any) {
    return this.http.post(`${this.url}/product`, data)
  }

  getSingleProduct(id: any) {
    return this.http.get(`${this.url}/product/${id}`)

  }

  updateProduct(data: any) {
    return this.http.put(`${this.url}/product/${data.id}`, data)
  }
  deleteProduct(id: any) {
    return this.http.delete(`${this.url}/product/${id}`)
  }


   // testimonial API calling method

   getTestimonial() {
    return this.http.get(`${this.url}/testimonial`)
  }

  createTestimonial(data: any) {
    return this.http.post(`${this.url}/testimonial`, data)
  }

  getSingleTestimonial(id: any) {
    return this.http.get(`${this.url}/testimonial/${id}`)

  }

  updateTestimonial(data: any) {
    return this.http.put(`${this.url}/testimonial/${data.id}`, data)
  }
  deleteTestimonial(id: any) {
    return this.http.delete(`${this.url}/testimonial/${id}`)
  }


   // cart API calling method

   getCart() {
    return this.http.get(`${this.url}/cart`)
  }

  createCart(data: any) {
    return this.http.post(`${this.url}/cart`, data)
  }

  getSingleCart(id: any) {
    return this.http.get(`${this.url}/cart/${id}`)

  }

  updateCart(data: any) {
    return this.http.put(`${this.url}/cart/${data.id}`, data)
  }
  deleteCart(id: any) {
    return this.http.delete(`${this.url}/cart/${id}`)
  }


   // wishlist API calling method

   getWishlist() {
    return this.http.get(`${this.url}/wishlist`)
  }

  createWishlist(data: any) {
    return this.http.post(`${this.url}/wishlist`, data)
  }

  getSingleWishlist(id: any) {
    return this.http.get(`${this.url}/wishlist/${id}`)

  }

  updateWishlist(data: any) {
    return this.http.put(`${this.url}/wishlist/${data.id}`, data)
  }
  deleteWishlist(id: any) {
    return this.http.delete(`${this.url}/wishlist/${id}`)
  }


   // checkout API calling method

   getCheckout() {
    return this.http.get(`${this.url}/checkout`)
  }

  createCheckout(data: any) {
    return this.http.post(`${this.url}/checkout`, data)
  }

  getSingleCheckout(id: any) {
    return this.http.get(`${this.url}/checkout/${id}`)

  }

  updateCheckout(data: any) {
    return this.http.put(`${this.url}/checkout/${data.id}`, data)
  }
  deleteCheckout(id: any) {
    return this.http.delete(`${this.url}/checkout/${id}`)
  }


   // user API calling method

   getUser() {
    return this.http.get(`${this.url}/user`)
  }

  createUser(data: any) {
    return this.http.post(`${this.url}/user`, data)
  }

  getSingleUser(id: any) {
    return this.http.get(`${this.url}/user/${id}`)

  }

  updateUser(data: any) {
    return this.http.put(`${this.url}/user/${data.id}`, data)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.url}/user/${id}`)
  }



   // newsLetter API calling method

   getNewsletter() {
    return this.http.get(`${this.url}/newsletter`)
  }

  createNewsletter(data: any) {
    return this.http.post(`${this.url}/newsletter`, data)
  }

  getSingleNewsletter(id: any) {
    return this.http.get(`${this.url}/newsletter/${id}`)

  }

  updateNewsletter(data: any) {
    return this.http.put(`${this.url}/newsletter/${data.id}`, data)
  }
  deleteNewsletter(id: any) {
    return this.http.delete(`${this.url}/newsletter/${id}`)
  }


   // contact Us API calling method

   getContactUs() {
    return this.http.get(`${this.url}/contactus`)
  }

  createContactUs(data: any) {
    return this.http.post(`${this.url}/contactus`, data)
  }

  getSingleContactUs(id: any) {
    return this.http.get(`${this.url}/contactus/${id}`)

  }

  updateContactUs(data: any) {
    return this.http.put(`${this.url}/contactus/${data.id}`, data)
  }
  deleteContactUs(id: any) {
    return this.http.delete(`${this.url}/contactus/${id}`)
  }


}
