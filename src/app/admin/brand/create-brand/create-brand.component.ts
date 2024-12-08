import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrl: './create-brand.component.css'
})
export class CreateBrandComponent {

  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    pic: new FormControl("", Validators.required),
    active: new FormControl("",Validators.required),
  })

  show: boolean = false
  constructor(private dataService: DataService, private router: Router) { }

  get name(): any {
    return this.myForm.get("name")
  }

  get pic(): any {
    return this.myForm.get("pic")
  }
  getInputFile(event: any) {
    this.myForm.patchValue({ "pic": "/brand/" + event.target.files[0].name })
  }
  postData() {
    this.dataService.getBrand().subscribe((response: any) => {
      let item = response.find((x: any) => x.name.toLowerCase() === (this.myForm.value.name as string).toLowerCase())
      if (item) {
        this.show = true
      }
      else {
        item = {
          name: this.myForm.value.name,
          pic: this.myForm.value.pic,
          active: this.myForm.value.active === "1" ? true : false,
        }
        this.dataService.createBrand(item).subscribe((response: any) => {
          this.router.navigate(['/admin/brand'])
        })
      }
    })
  }

}
