import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { environment } from '../../../environments/environment';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  apiUrl = environment.apiUrl
  wishlist: any = []
  orders: any = []
  constructor(private dataService: DataService, private storage: StorageService) {
    this.getAPIData()
    this.dataService.getCheckout().subscribe((response: any) => {
      this.orders = response.filter((x: any) => x.user === this.storage.getLocalStorage("userid"))
    })
  }

  getAPIData() {
    this.dataService.getWishlist().subscribe((response: any) => {
      this.wishlist = response.filter((x: any) => x.user == this.storage.getLocalStorage("userid"))
    })
  }

  deleteRecord(id: any) {
    if (window.confirm("Are You Sure to Remove that Item from Wishlist")) {
      this.dataService.deleteWishlist(id).subscribe((response: any) => {
        this.getAPIData()
      })
    }
  }
}
