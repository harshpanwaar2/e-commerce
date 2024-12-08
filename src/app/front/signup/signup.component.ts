import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    username: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    email: new FormControl("", [Validators.required, Validators.minLength(13), Validators.maxLength(100)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
    password: new FormControl("", [Validators.required]),
    cpassword: new FormControl("", [Validators.required]),
  })
  usernameError = ""
  emailError = ""
  passwordError = ""

  get name(): any {
    return this.myForm.get("name")
  }
  get username(): any {
    return this.myForm.get("username")
  }
  get email(): any {
    return this.myForm.get("email")
  }
  get phone(): any {
    return this.myForm.get("phone")
  }
  get password(): any {
    return this.myForm.get("password")
  }


  constructor(private dataService: DataService, private router: Router) { }

  postData(e: any) {
    e.preventDefault()
    if (this.myForm.value.password === this.myForm.value.cpassword) {
      this.dataService.getUser().subscribe((response: any) => {
        let item = response.find((x: any) => x.username?.toLowerCase() === this.myForm.value.username?.toLowerCase() || x.email?.toLowerCase() === this.myForm.value.email?.toLowerCase())
        if (item) {

          this.usernameError = item.username == this.myForm.value.username ? "Username Already Taken" : ""
          this.emailError = item.email == this.myForm.value.username ? "Email Already Taken" : ""

        } else {
          let item = {
            name: this.myForm.value.name,
            username: this.myForm.value.username,
            email: this.myForm.value.email,
            phone: this.myForm.value.phone,
            password: this.myForm.value.password,
            role: "Buyer",
            active: true

          }
          this.dataService.createUser(item).subscribe((response: any) => {
            this.router.navigate(['/login'])

          })
        }


      })
    } else
      this.passwordError = "Password and Confirm Password Doesn't Matched"
  }




}
