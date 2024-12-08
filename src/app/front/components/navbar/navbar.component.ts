import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../storage.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name = ""
  login = false
  role = "Buyer"

  constructor(private router: Router, private storage: StorageService) {
    this.name = this.storage.getLocalStorage("name") ?? ""
    this.login = this.storage.getLocalStorage("login") == "true" ? true : false
    this.role = this.storage.getLocalStorage("role") ?? "Buyer"
  }

  ngOnInit() {

  }

  logout() {
    this.storage.removeLocalStorage("name")
    this.storage.removeLocalStorage("login")
    this.storage.removeLocalStorage("role")
    this.router.navigate(["/login"])
  }
}
