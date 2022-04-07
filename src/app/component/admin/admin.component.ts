import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';
import { TransfereService } from 'src/app/service/transfere-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  updateProductForm: FormGroup; //kayıt formu
  updateProduct:any;
  closeResult: string;
  public productList : any;
  public filterCategory : any;
  searchKey : string = '';
  public isProductsLoaded = false;

  constructor(private api : ApiService , private cartService : CartService
    ,private router: Router, private transfereService:TransfereService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {


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


     //Form validasyonları kayıt -register- formu için eklendi.
     this.updateProductForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description : ['', [Validators.required]],
      price : ['', [Validators.required ]],

      }
      );


  }



  gotoProduct (item:any) {

    this.router.navigate(['/product-detail/'+item.id]);
  }

  deleteProduct (item:any) {
      for( let i = 0; i < this.productList.length; i++){
        if ( this.productList[i] === item) {
            this.productList.splice(i, 1);
        }

    }
  }

  openUpdateProductModal (item:any) {
    this.updateProduct=item;
 }

  filter (category:string) {
    this.filterCategory = this.productList
    .filter((a:any) => {
      if (a.category == category || category == '') {
        return a;
      }
    })
  }

  onSubmitUpdateProductForm () {
    if(this.updateProduct==0)
    {
      alert("yeni eklenecek");

    }else{

      alert("var olan urun updatelenecek");
    }
    alert(this.updateProductForm.value.price);

 }

}
