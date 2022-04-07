import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public current_product : any;
  id : any ;
  public commentList : any = [];
  constructor(private api : ApiService ,private cartService : CartService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    //alert("id alabildik mi kontrol ediyorum.")

    this.api.getComment(Number(this.id)+1149)
      .subscribe(res => {
        this.commentList = res.data;
        console.log(this.commentList)
      });




    this.api.getSingleProduct(this.id)
    .subscribe(res => {
      this.current_product = res;
      this.current_product.quantity=1;

      this.current_product.total=this.current_product.quantity*this.current_product.price;
      console.log(this.current_product.description)
    });
  }

  addtocart (item:any) {
    this.cartService.addtoCart(item);
  }



}
