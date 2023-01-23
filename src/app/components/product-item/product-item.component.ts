import { Component ,Input,OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  constructor(private CartService:CartService){}
  ngOnInit(): void {
    
    this.products=this.CartService.cart.value;
    
    
  }


@Input() product:Product

  products:Product[]=[]


  add(product:Product){
    this.CartService.add(product)

  }

  removeItem(product:Product){
    this.CartService.remove(product);

      }
  
}
