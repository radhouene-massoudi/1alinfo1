import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
list:any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
this.productService.fetchProducts().subscribe(
  (result)=>{
    this.list=result;
console.log(result);
  }
);
  }


}
