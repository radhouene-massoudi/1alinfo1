import { Component, OnInit } from '@angular/core';
import { ProductService } from './../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
id:any;
  constructor(
    private ps: ProductService,
    private ac:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id=this.ac.snapshot.params['id'];
  }
  update(d:any){
    this.ps.updateProduct(d,this.id).subscribe(
      ()=>{
        console.log('updated')
      }
    )
  }

}
