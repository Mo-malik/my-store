import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selected=1;
  item=0;
  add(){
    this.item++;
    alert(this.item)
  }
  addItem(){
   this.item++;
  }
  removeItem(){
    this.item--;

  }
products:Product[]=[];
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    
this.productService.getProducts().subscribe((data)=>{
  this.products=data;
})
  }




}
