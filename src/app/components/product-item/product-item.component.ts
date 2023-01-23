import { Component ,EventEmitter,Input,OnInit, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  constructor(private CartService:CartService, private productServcice:ProductService ){}

  products:Product[]
  ngOnInit(): void {

    this.productServcice.checkProductCart(this.product)
    
          // this.productServcice.find(this.product)
          // if(this.CartService.cart.value.length===0){
          //   console.log("cart is null");
          //   this.product.count=0
          //      }
          //     else{
      
          //       console.log("cart Contain data");
          //       this.products=this.CartService.cart.value;
          //       localStorage.setItem("cart",JSON.stringify(this.products))
          //       this.products=this.CartService.cart.getValue();
          //       const d=JSON.parse(localStorage.getItem('cart')!)
          //       for(var i=0;i<d.length;i++){
          //         console.log("found");
      
          //         if(d[i].id===this.product.id)
          //         {
                
          //           this.product.count=d[i].count
                    
          //         }
      
      
          //       }
        
        }



@Input() product:Product

@Output() addedproduct:EventEmitter<Product>=new EventEmitter<Product>();


  add(product:Product){
    if(product.count==0)
    {
      this.addedproduct.emit(product)
    }
    this.CartService.add(product)

  }

  removeItem(product:Product){
    this.CartService.remove(product);

      }
  
      checkProductCart(product:Product){
        console.log("check");
        const index = this.CartService.cart.value.filter(item => item.id === product.id).length;
        if (index === 0) {
          console.log("first");
          product.count=0
        }
        else {
          console.log("second");
          // product.count=this.cart.value.filter(item => item.id === product.id)[0].count;
          product.count=4
    
          console.log(product.count);
          
        }
    
      }
}
