import { Component, ElementRef, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from '../../../../environments/environment'
var win = (window as any);

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  apiUrl = environment.apiUrl
  rte: any
  maincategory: any = []
  subcategory: any = []
  brand: any = []
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    maincategory: new FormControl(""),
    subcategory: new FormControl(""),
    brand: new FormControl(""),
    color: new FormControl("", Validators.required),
    size: new FormControl("", Validators.required),
    basePrice: new FormControl("", Validators.required),
    discount: new FormControl("", Validators.required),
    finalPrice: new FormControl(""),
    stock: new FormControl("1"),
    stockQuantity: new FormControl("", Validators.required),
    pic: new FormControl([""], Validators.required),
    active: new FormControl("", Validators.required),
  })

  show: boolean = false
  id = ""
  oldPics:any = []
  constructor(private dataService: DataService, private router: Router, private rootref: ElementRef, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleProduct(this.id).subscribe((response: any) => {
        this.oldPics = response.pic
        this.myForm.patchValue({
          name: response.name,
          maincategory: response.maincategory,
          subcategory: response.subcategory,
          brand: response.brand,
          color: response.color,
          size: response.size,
          basePrice: response.basePrice,
          discount: response.discount,
          finalPrice: response.finalPrice,
          stock: response.stock ? "1" : "0",
          stockQuantity: response.stockQuantity,
          active: response.active ? "1" : "0",
        })
        this.rte.setHTMLCode(response.description??"")
      })
    })
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response
    })
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.subcategory = response
    })
    this.dataService.getBrand().subscribe((response: any) => {
      this.brand = response
    })
  }

  get name(): any {
    return this.myForm.get("name")
  }

  get color(): any {
    return this.myForm.get("color")
  }

  get size(): any {
    return this.myForm.get("size")
  }

  get basePrice(): any {
    return this.myForm.get("basePrice")
  }

  get discount(): any {
    return this.myForm.get("discount")
  }

  get stockQuantity(): any {
    return this.myForm.get("stockQuantity")
  }

  get pic(): any {
    return this.myForm.get("pic")
  }
  getInputFile(event: any) {
    this.oldPics.concat(Array.from(event.target.files).map((x: any) => "/product/" + x.name))
  }

  deletePic(pic:any){
    let index = this.oldPics.findIndex((x:any)=>x===pic)
    this.oldPics.splice(index,1)
  }
  postData() {
    this.dataService.getProduct().subscribe((response: any) => {
      let item = response.find((x: any) => x.name.toLowerCase() === (this.myForm.value.name as string).toLowerCase() && x.id!==this.id)
      if (item) {
        this.show = true
      }
      else {
        let bp = Number(this.myForm.value.basePrice)
        let d = Number(this.myForm.value.discount)
        let fp = Math.round(bp - bp * d / 100)
        item = {
          id: this.id,
          name: this.myForm.value.name,
          maincategory: this.myForm.value.maincategory,
          subcategory: this.myForm.value.subcategory,
          brand: this.myForm.value.brand,
          color: this.myForm.value.color,
          size: this.myForm.value.size,
          basePrice: bp,
          discount: d,
          finalPrice: fp,
          stock: this.myForm.value.stock === "1" ? true : false,
          stockQuantity: Number(this.myForm.value.stockQuantity),
          description: this.rte.getHTMLCode(),
          pic: this.oldPics,
          active: this.myForm.value.active === "1" ? true : false,
        }
        this.dataService.updateProduct(item).subscribe((response: any) => {
          this.router.navigate(['/admin/product'])
        })
      }
    })
  }

  ngOnInit() {
    // console.log("app.component.ts !ngOnInit",this,this.rootref.nativeElement.outerHTML.length)
    var rtediv = this.rootref.nativeElement.querySelector(".rtediv");
    this.rte = new win.RichTextEditor(rtediv);
    this.rte.setHTMLCode("")
  }
}
