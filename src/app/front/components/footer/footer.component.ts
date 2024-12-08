import { Component } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email: string = ""
  message:string=""

  constructor(private dataService:DataService){}



  getInputData(event:any){
    this.email = event.target.value
  }

  postData(){
if(this.email===""){
  this.message=" Please Enter a Valid Email"
}else{
  this.dataService.getNewsletter().subscribe((response:any)=>{
    let item = response.find((x:any)=>x.email === this.email)
    if(item)
      this.message = "Your Email Address Is Already Registered With Us"
    else{
      this.dataService.createNewsletter({email:this.email,active:true}).subscribe((response:any)=>{
        this.message = "Thanks to Subscribe Our Newsletter Service"
      })
    }
 })
}

}

   

}
