import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number = 0;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe (res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeCartItem (product : any) {
    this.cartService.removeCartItem(product);
  }

  removeAllProductsFromCart () {
    this.cartService.removeAllCart();
  }

  Pay() {
    console.log("Your order is created and your pay is done!!! ");
    console.log("Your order's items: ' " );
   this.products.forEach((element: any) => {
     console.log(element);

   });
    alert("Your order is created and your pay is done!!! ")
    this.removeAllProductsFromCart();

  }



}
