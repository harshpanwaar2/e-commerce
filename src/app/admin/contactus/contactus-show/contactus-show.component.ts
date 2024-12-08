import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contactus-show',
  templateUrl: './contactus-show.component.html',
  styleUrl: './contactus-show.component.css'
})
export class ContactusShowComponent {
  data: any = {}
  apiUrl = environment.apiUrl
  id = ""
  constructor(private dataService: DataService, private activatedRoutes: ActivatedRoute, private router: Router) {
    this.getAPIData()
  }
  getAPIData() {
    this.activatedRoutes.queryParams.subscribe((params: any) => {
      this.id = params.id
      this.dataService.getSingleContactUs(params.id).subscribe((response: any) => {
        this.data = response
      })
    })
  }

  deleteRecord() {
    if (window.confirm("Are You Sure to delete that Record : ")) {
      this.dataService.deleteContactUs(this.id).subscribe((response: any) => {
        this.router.navigate(['/admin/contactus'])
      })
    }
  }

  updateRecord() {
    if (window.confirm("Are You Sure to update that Record : ")) {
      this.dataService.updateContactUs({ ...this.data, active: !this.data.active }).subscribe((response: any) => {
        this.getAPIData()
      })

    }
  }

}
