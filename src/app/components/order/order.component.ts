import { Component ,OnInit} from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  products:Product[]
  user:User;
  totalPrice=0
  ngOnInit(): void {
  this.products=this.cartService.cart.value
  this.userService.CurrentUser.subscribe(data=>this.user=data)
  this.products.forEach(item=> 
    {
      console.log(this.totalPrice);
      
      return this.totalPrice=this.totalPrice+( item.price*item.count)
    }
    
    )
 
  }
constructor(private cartService:CartService,private userService:UserService){

}
}