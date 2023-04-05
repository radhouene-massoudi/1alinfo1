import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
products:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  showForm(t:any){
this.products.push(t);
  }
}
