import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  email: string,
  active: boolean
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getNewsletter().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Item : ")) {
      this.dataService.deleteNewsletter(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }

  updateRecord(id: string) {
    if (window.confirm("Are You Sure to update that Item : ")) {
      this.dataService.getSingleNewsletter(id).subscribe((response:any)=>{
        this.dataService.updateNewsletter({...response,active:!response.active}).subscribe((response: any) => {
          this.getAPIData()
        })
      })
      
    }
  }

}
