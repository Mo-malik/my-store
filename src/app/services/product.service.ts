import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products:Product[]
 
  constructor(private http:HttpClient,private cartService:CartService) { }

  getProducts(){
    return this.http.get<Product[]>('http://localhost:3000/Products')
  }

  checkProductCart(product:Product){

    this.cartService.cart.subscribe(value=>{
      console.log("cart ");
      this.products=value;
      
    })
    console.log("check");
    
    const index = this.cartService.cart.value.filter(item => item.id === product.id).length;

    if (index === 0) {
      console.log("first");

      product.count=0
    }
    else {
      console.log("second");

      product.count=this.cartService.cart.value.filter(item => item.id === product.id)[0].count;


    }

  }

//   find(product:Product){
  
//     if(this.cartService.cart.value.length===0){
//       console.log("cart is null");
//       product.count=0
//          }
//         else{

//           console.log("cart Contain data");
//           this.products=this.cartService.cart.value;
//           // localStorage.setItem("cart",JSON.stringify(this.products))
//           this.products=this.cartService.cart.getValue();
//           for(var i=0;i<this.products.length;i++){
//             console.log("found");

//             if(this.products[i].id===product.id)
//             {
          
//               product.count=this.products[i].count
              
//             }


//           }
//   }
      
// }
}
