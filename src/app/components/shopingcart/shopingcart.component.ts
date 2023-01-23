import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shopingcart',
  templateUrl: './shopingcart.component.html',
  styleUrls: ['./shopingcart.component.css']
})
export class ShopingcartComponent implements OnInit{
cart:Product[];
formGroup:FormGroup
displayedColumns: string[] = ['name', 'image', 'count','price','action'];
  constructor(private cartService:CartService,private builder:FormBuilder,
    private userService:UserService,private router:Router){

  }
  ngOnInit(): void {
    
  this.cart=this.cartService.getCart();
  this.formGroup=this.builder.group({
    username:['',[Validators.required,Validators.min(3)]],
    address:['',[Validators.required,Validators.min(3)]],
    card:['',[Validators.required,Validators.min(14)]],
    
  })
  }
  add(product:Product){
    this.cartService.add(product)
  }

  removeItem(product:Product){
    this.cartService.remove(product);
    this.cart=this.cart.filter(item=> item.count!=0)
      }

onSubmit(){

  if(this.formGroup.valid){
    this.userService.updateUser(this.formGroup.value);
    this.router.navigateByUrl("/order")

  }

}

}
