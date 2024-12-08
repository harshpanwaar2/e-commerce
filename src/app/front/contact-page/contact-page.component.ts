import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  showMessage:string=""
  myForm = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required),

  })
constructor(private dataService :DataService){}

  get name():any {
    return this.myForm.get("name")
  }
  get email():any {
    return this.myForm.get("email")
  }
  get phone():any {
    return this.myForm.get("phone")
  }
  get subject():any {
    return this.myForm.get("subject")
  }
  get message():any {
    return this.myForm.get("message")
  }
  postData(){
let item = {
  name :this.myForm.value.name,
  email :this.myForm.value.email,
  phone :this.myForm.value.phone,
  subject :this.myForm.value.subject,
  message :this.myForm.value.message,
  date : new Date(),
  active : true
}
this.dataService.createContactUs(item).subscribe((response:any)=>{
    this.showMessage= "Thanks To Share Your Query With Us. Our Team Will Contact You Soon..."
    this.myForm.patchValue({
      name:"",
      email:"",
      phone:"",
      subject:"",
      message:"",
    })
    this.name.touched = false,
    this.email.touched = false,
    this.phone.touched = false,
    this.subject.touched = false,
    this.message.touched = false
})
  }

}
