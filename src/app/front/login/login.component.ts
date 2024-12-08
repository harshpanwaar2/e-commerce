import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  })
  usernameError = ""





  constructor(private dataService: DataService, private router: Router,private storage: StorageService) { }

  postData(e: any) {
    e.preventDefault()
    this.dataService.getUser().subscribe((response: any) => {
      let item = response.find((x: any) => (x.username === this.myForm.value.username || x.email === this.myForm.value.username) && x.password === this.myForm.value.password)
      if (item) {
if(item.active){

  this.storage.setLocalStorage("login", "true")
        this.storage.setLocalStorage("name", item.name)
        this.storage.setLocalStorage("userid", item.id)
        this.storage.setLocalStorage("role", item.role)
        if (item.role === "Admin")
          this.router.navigate(['/admin'])
        else
          this.router.navigate(['/user'])
}else{
  this.usernameError = "Your Account is InActive. Please Contact Our Support Team"

}
        

      } else
        this.usernameError = "Invalid Username or Password"

    })
  }




}
