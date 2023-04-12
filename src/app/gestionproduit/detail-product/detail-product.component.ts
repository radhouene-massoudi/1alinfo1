import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
product =new Product();
  constructor(private ac:ActivatedRoute,
    private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.getProductById(this.ac.snapshot.params['id']).subscribe(
(d)=>{
this.product=d;
}
    );
    this.ac.params.subscribe(
      (d)=>{
        console.log(d)
      }
    );
    //console.log(d);
   // console.log(this.ac.snapshot.params['test'])
   
  }
  test(){
    //traitement  
    }

}
