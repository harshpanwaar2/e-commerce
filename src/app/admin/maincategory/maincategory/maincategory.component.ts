import { Component } from '@angular/core';
import { DataService } from '../../../data.service';
import { environment } from '../../../../environments/environment'
interface objType {
  id: string,
  name: string,
  pic: string,
  active: boolean
}
@Component({
  selector: 'app-maincategory',
  templateUrl: './maincategory.component.html',
  styleUrl: './maincategory.component.css'
})
export class MaincategoryComponent {
  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Item : ")) {
      this.dataService.deleteMaincategory(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }
}
