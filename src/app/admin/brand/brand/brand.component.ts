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
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {

  data: objType[] = []
  apiUrl = environment.apiUrl
  constructor(private dataService: DataService) {
    this.getAPIData()
  }

  getAPIData() {
    this.dataService.getBrand().subscribe((response: any) => {
      this.data = response
    })
  }

  deleteRecord(id: string) {
    if (window.confirm("Are You Sure to delete that Item : ")) {
      this.dataService.deleteBrand(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }

}
