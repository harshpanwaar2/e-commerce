import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  name:string,
  email: string,
  phone:string,
  subject:string,
  date :string,
  active: boolean
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {

  
  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getContactUs().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Record : ")) {
      this.dataService.deleteContactUs(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }

 

}
