import { Component,OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
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
  constructor(private productService:ProductService,
    private _snackBar: MatSnackBar){

  }
  ngOnInit(): void {
    
this.productService.getProducts().subscribe((data)=>{
  this.products=data;
})
  }

  alertUser(product:Product){
    this._snackBar.open(product.name + ' Added To Cart','close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:2*1000
    });
  }


}
