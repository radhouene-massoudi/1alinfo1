import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.params.subscribe(
      (d)=>{
        console.log(d)
      }
    );
    //console.log(d);
   // console.log(this.ac.snapshot.params['test'])
   
  }

}
