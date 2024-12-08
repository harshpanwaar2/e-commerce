import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-testimonial',
  templateUrl: './update-testimonial.component.html',
  styleUrl: './update-testimonial.component.css'
})
export class UpdateTestimonialComponent {

  id: string = ""
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    pic: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    active: new FormControl("1"),
  })

  show: boolean = false
  constructor(private dataService: DataService, private router: Router, private activatedRoutes: ActivatedRoute) {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleTestimonial(this.id).subscribe((response: any) => {
        this.myForm.patchValue({
          name: response.name,
          pic: response.pic,
          message: response.message,
          active: response.active ? "1" : "0",
        })
      })
    })
  }

  get name(): any {
    return this.myForm.get("name")
  }

  get pic(): any {
    return this.myForm.get("pic")
  }
  get message(): any {
    return this.myForm.get("message")
  }
  getInputFile(event: any) {
    this.myForm.patchValue({ "pic": "/testimonial/" + event.target.files[0].name })
  }
  postData() {
    this.dataService.getTestimonial().subscribe((response: any) => {
      let item = response.find((x: any) => x.id !== this.id && x.name.toLowerCase() === (this.myForm.value.name as string).toLowerCase())
      if (item) {
        this.show = true
      }
      else {
        item = {
          id: this.id,
          name: this.myForm.value.name,
          pic: this.myForm.value.pic,
          message: this.myForm.value.message,
          active: this.myForm.value.active === "1" ? true : false,
        }
        this.dataService.updateTestimonial(item).subscribe((response: any) => {
          this.router.navigate(['/admin/testimonial'])
        })
      }
    })
  }
}
