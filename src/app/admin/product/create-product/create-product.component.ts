import {Component,ElementRef,OnInit,OnChanges,AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';

var win=(window as any);

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  rte:any
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
    stockQuantity: new FormControl(null, Validators.required),
    pic: new FormControl([""], Validators.required),
    active: new FormControl("",Validators.required ),
  })

  show: boolean = false
  constructor(private dataService: DataService, private router: Router, private rootref:ElementRef) {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response,
        this.myForm.patchValue({ maincategory: this.maincategory[0].name })
    }),

      this.dataService.getSubcategory().subscribe((response: any) => {
        this.subcategory = response
        this.myForm.patchValue({ subcategory: this.subcategory[0].name })

      }),
      this.dataService.getBrand().subscribe((response: any) => {
        this.brand = response
        this.myForm.patchValue({ brand: this.brand[0].name })

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
    this.myForm.patchValue({ "pic": Array.from(event.target.files).map((x: any) => "/product/" + x.name) })
  }
  postData() {
    this.dataService.getProduct().subscribe((response: any) => {
      let item = response.find((x: any) => x.name.toLowerCase() === (this.myForm.value.name as string).toLowerCase())
      if (item) {
        this.show = true
      }
      else {
        let bp = Number(this.myForm.value.basePrice)
        let d = Number(this.myForm.value.discount)
        let fp = Math.floor(bp - bp * d / 100)
        item = {
          name: this.myForm.value.name,
          maincategory: this.myForm.value.maincategory,
          subcategory: this.myForm.value.subcategory,
          brand: this.myForm.value.brand,
          color: this.myForm.value.color,
          size: this.myForm.value.size,
          basePrize: bp,
          discount: d,
          finalPrice: fp,
          stock: this.myForm.value.stock === "1" ? true : false,
          stockQuantity: Number(this.myForm.value.stockQuantity),
          description:this.rte.getHTMLCode(),
          pic: this.myForm.value.pic,
          active: this.myForm.value.active === "1" ? true : false,
        }
        this.dataService.createProduct(item).subscribe((response: any) => {
          this.router.navigate(['/admin/product'])
        })
      }
    })
  }

  ngOnInit(){
    // console.log("app.component.ts !ngOnInit",this,this.rootref.nativeElement.outerHTML.length)
    var rtediv=this.rootref.nativeElement.querySelector(".rtediv");
    this.rte=new win.RichTextEditor(rtediv);
    this.rte.setHTMLCode("")
  }
  
  


}
