import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addproduct(data:any){
    //post insert
 return this.http.post('http://localhost:3000/products',data)
  }
  fetchProducts(){
    //select *
  return  this.http.get('http://localhost:3000/products')
  }
}