import { Component, OnInit } from '@angular/core';
import { FirstService } from 'src/app/first.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
products:any=[];
  constructor(
    private first:FirstService,
    private productService: ProductService
    ) {}

  ngOnInit(): void {
    //this.first.test();
    this.first.second().subscribe();
    
  }


  showForm(t:any){
this.products.push(t);
  }
 save(dataFromForm:any){
this.productService.addproduct(dataFromForm).subscribe(
  ()=>{
   alert('next')
  },
  (err)=>{
    //switch case err.status
console.log(err)
  },

  ()=>{
alert('comp')
  }
);
 }
}
