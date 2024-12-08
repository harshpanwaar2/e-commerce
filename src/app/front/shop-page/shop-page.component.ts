import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  standalone: false,
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {
  maincategory: any = []
  subcategory: any = []
  brand: any = []
  products: any = []
  filteredProducts = []
  mc: string = ""
  sc: string = ""
  br: string = ""
  flag: boolean = false
  search: string = ""
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      params.mc ? this.mc = params.mc : ""
      params.sc ? this.sc = params.sc : ""
      params.br ? this.br = params.br : ""
      this.dataService.getProduct().subscribe((response: any) => {
        this.products = response.filter((x: any) => x.active)
        this.filterData(this.mc, this.sc, this.br)
      })
    })
    this.dataService.getMaincategory().subscribe((response: any) => {
      this.maincategory = response.filter((x: any) => x.active)
    })
    this.dataService.getSubcategory().subscribe((response: any) => {
      this.subcategory = response.filter((x: any) => x.active)
    })
    this.dataService.getBrand().subscribe((response: any) => {
      this.brand = response.filter((x: any) => x.active)
    })

  }
  filterData(mc: any, sc: any, br: any) {
    this.mc = mc
    this.sc = sc
    this.br = br
    if (mc === "" && sc === "" && br === "")
      this.filteredProducts = this.products
    else if (mc !== "" && sc === "" && br === "")
      this.filteredProducts = this.products.filter((x: any) => x.maincategory === mc)
    else if (mc === "" && sc !== "" && br === "")
      this.filteredProducts = this.products.filter((x: any) => x.subcategory === sc)
    else if (mc === "" && sc === "" && br !== "")
      this.filteredProducts = this.products.filter((x: any) => x.brand === br)
    else if (mc !== "" && sc !== "" && br === "")
      this.filteredProducts = this.products.filter((x: any) => x.maincategory === mc && x.subcategory === sc)
    else if (mc !== "" && sc === "" && br !== "")
      this.filteredProducts = this.products.filter((x: any) => x.maincategory === mc && x.brand === br)
    else if (mc === "" && sc !== "" && br !== "")
      this.filteredProducts = this.products.filter((x: any) => x.brand === br && x.subcategory === sc)
    else
      this.filteredProducts = this.products.filter((x: any) => x.maincategory === mc && x.brand === br && x.subcategory === sc)


  }
  sortFilter(e: any) {
    var value = e.target.value
    if (value == "1")
      this.filteredProducts.sort((x: any, y: any) => y.id.localeCompare(x.id))
    else if (value == "2")
      this.filteredProducts.sort((x: any, y: any) => y.finalPrice - x.finalPrice)
    else (value == "3")
    this.filteredProducts.sort((x: any, y: any) => x.finalPrice - y.finalPrice)


    this.flag = !this.flag
  }


  getInputSearch(e: any) {
    this.search = e.target.value?.toLowerCase()
  }

  postSearch() {
    this.filteredProducts = this.products.filter((x: any) => x.name.toLowerCase().includes(this.search) || x.maincategory.toLowerCase() === this.search || x.subcategory.toLowerCase() === this.search || x.brand.toLowerCase() === this.search || x.color.toLowerCase() === this.search || x.description?.toLowerCase().includes(this.search))
  }
}
