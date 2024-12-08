import { Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.css'
})
export class ProfileComponentComponent {
  apiUrl = environment.apiUrl
  user:any ={}
  @Input() title:any

  constructor(private dataService: DataService ,private storage: StorageService, private router:Router){
    if( !this.storage.getLocalStorage("login") || this.storage.getLocalStorage("login")==false){
      this.router.navigate(['/login'])
    }else{
      this.dataService.getSingleUser(this.storage.getLocalStorage("userid")).subscribe((response:any)=>{
        this.user = response
       })
    }
     

  }


}
