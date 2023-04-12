import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-removeproduct',
  templateUrl: './removeproduct.component.html',
  styleUrls: ['./removeproduct.component.css']
})
export class RemoveproductComponent implements OnInit {

  constructor(
    private productservice:ProductService,
    private ac:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.productservice
    .removeProducts(this.ac.snapshot.params['id'])
    .subscribe(
      ()=>{
        console.log('removed')
      }
    );
  }

}
