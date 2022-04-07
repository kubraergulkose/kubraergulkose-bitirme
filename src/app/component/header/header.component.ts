import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number =0;
  public searchTerm !: string;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.totalItem = res.length;
    })
  }

  search (event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm) //arama kelimemiz yakalanıyor mu bakalım.
    this.cartService.search.next(this.searchTerm);
  }

  isTokenExist() {
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  isAdminTokenExist() {
    if (localStorage.getItem("isAdmin")=="true") {
      return true;
    }
    return false;
  }


  logOut() {
    localStorage.removeItem("token");
  }
}
