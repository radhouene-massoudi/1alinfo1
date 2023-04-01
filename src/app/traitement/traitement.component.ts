import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from './../model/product';

@Component({
  selector: 'app-traitement',
  templateUrl: './traitement.component.html',
  styleUrls: ['./traitement.component.css']
})
export class TraitementComponent implements OnInit {
  klass = '1alinfo1 is the best';
  kolor = 'blue';
  search='';
  listProdcut:Product[] = [
    { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
    { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
    { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },];
  
    constructor() { 
      console.log("cons")
    }

  ngOnInit(): void {
    console.log("ngonInit")
  }

  showMsg() {
    alert('bonjour');
    console.log('bonourrrrrrr')
  }
  changeColor() {
    this.kolor = 'red';
  }
  decreaseQauntity(index:number){
//console.log(p);
//p.quantity--;
this.listProdcut[index].quantity--;
  }
}
