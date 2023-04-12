import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:any;
product= new Product()
  constructor(
    private ps: ProductService,
    private ac:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
    this.ps.getProductById(this.id).subscribe(
      (dt)=>{
this.product=dt
      }
    );
  }
  update(d:any){
    this.ps.updateProduct(d,this.id).subscribe(
      ()=>{
        this.router.navigate(['products'])
      }
    )
  }

}
