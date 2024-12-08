import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-testimonial',
  templateUrl: './create-testimonial.component.html',
  styleUrl: './create-testimonial.component.css'
})
export class CreateTestimonialComponent {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    pic: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),
    active: new FormControl("", Validators.required),
  })

  show: boolean = false
  constructor(private dataService: DataService, private router: Router) { }

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
      let item = response.find((x: any) => x.name.toLowerCase() === (this.myForm.value.name as string).toLowerCase())
      if (item) {
        this.show = true
      }
      else {
        item = {
          name: this.myForm.value.name,
          pic: this.myForm.value.pic,
          message: this.myForm.value.message,
          active: this.myForm.value.active === "1" ? true : false,
        }
        this.dataService.createTestimonial(item).subscribe((response: any) => {
          this.router.navigate(['/admin/testimonial'])
        })
      }
    })
  }
}
