import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  name:string,
  username:string,
  email: string,
  phone:string,
  role:string,
  active: boolean
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getUser().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Record : ")) {
      this.dataService.deleteUser(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }

  updateRecord(id: string) {
    if (window.confirm("Are You Sure to update that Record : ")) {
      this.dataService.getSingleUser(id).subscribe((response:any)=>{
        this.dataService.updateUser({...response,active:!response.active}).subscribe((response: any) => {
          this.getAPIData()
        })
      })
      
    }
  }

}
