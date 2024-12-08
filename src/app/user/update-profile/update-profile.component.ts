import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  user:any={}
  myForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
    address : new FormControl(""),
    pin : new FormControl(""),
    city : new FormControl(""),
    state : new FormControl(""),
    pic : new FormControl(""),
  })
 
  get name(): any {
    return this.myForm.get("name")
  }
 
  get phone(): any {
    return this.myForm.get("phone")
  }
  


  constructor(private dataService: DataService, private router: Router, private storage:StorageService) { 
    this.dataService.getSingleUser(this.storage.getLocalStorage("userid")).subscribe((response:any)=>{
      this.user =response
      this.myForm.patchValue({
        name:response.name,
        phone:response.phone,
        address:response.address,
        pin:response.pin,
        city:response.city,
        state:response.state,
        pic:response.pic,
        
      })
    })
  }
  getInputFile(event: any) {
    this.myForm.patchValue({ "pic": "/product/" + event.target.files[0].name })
  }

  postData(e: any) {
    e.preventDefault()
    let item={
      ...this.user,
      name:this.myForm.value.name,
      phone:this.myForm.value.phone,
      address:this.myForm.value.address,
      pin:this.myForm.value.pin,
      city:this.myForm.value.city,
      state:this.myForm.value.state,
      pic:this.myForm.value.pic,

    }
     
    this.dataService.updateUser(item).subscribe((response:any)=>{
      if(this.user.role ==="Admin")
        this.router.navigate(['/admin'])
      else
      this.router.navigate(['/user'])

    })
  }
}
