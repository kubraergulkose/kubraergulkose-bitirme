import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TransfereService } from 'src/app/service/transfere-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  public filterCategory : any;
  searchKey : string = '';
  public isLoginSuccess = false;
  public isProductsLoaded = false;
  public Iscardview = true;


  clickListView () {
    this.Iscardview= !this.Iscardview;
    return this.Iscardview;
  }


  constructor(private api : ApiService , private cartService : CartService
    ,private router: Router, private transfereService:TransfereService ) { }

  ngOnInit(): void {



    this.isLoginSuccess = this.transfereService.getData();

    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion"
        }
        Object.assign(a, {quantity:1, total:a.price});
      });
      console.log(this.productList)
     this.isProductsLoaded=true;
    });

    this.cartService.search.subscribe ((val:any)=>{
      this.searchKey = val;

    })

    //this.isLoginSuccess = this.loginComponent.isLoginSuccess;


  }

  addtocart (item:any) {
    this.cartService.addtoCart(item);
  }
  gotoProduct (item:any) {

    this.router.navigate(['/product-detail/'+item.id]);
  }

  filter (category:string) {
    this.filterCategory = this.productList
    .filter((a:any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

  //ürün görünümümleri için iki method tanımladım.



}
