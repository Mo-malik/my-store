import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detaile',
  templateUrl: './product-detaile.component.html',
  styleUrls: ['./product-detaile.component.css']
})
export class ProductDetaileComponent  implements OnInit{
  id:any;
  product:Product;



  constructor(private roter:ActivatedRoute , private productServis:ProductService,private CartService:CartService){

  }
  ngOnInit(): void {
    this.id=this.roter.snapshot.paramMap.get('id');
    console.log(this.id);

    this.productServis.getProducts().subscribe((data)=>{
      this.product=data.filter(product=>{return product.id==this.id})[0]
      console.log(this.product);
      
    })
    
  }
  add(product:Product){
    this.CartService.add(product)

  }

  removeItem(product:Product){
    this.CartService.remove(product);

      }
}
