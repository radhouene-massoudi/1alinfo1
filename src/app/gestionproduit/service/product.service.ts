import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addproduct(data:any){
    //post insert
 return this.http.post('http://localhost:3000/products',data)
  }
  fetchProducts():Observable<Product[]>{
    //select *
  return  this.http.get<Product[]>('http://localhost:3000/products')
  }
  removeProducts(id:any){
return this.http.delete('http://localhost:3000/products/'+id)
  }
  updateProduct(data:any,id:any){
    //put update
 return this.http.put('http://localhost:3000/products/'+id,data)
  }
  getProductById(id:any):Observable<Product>{
 return this.http.get<Product>('http://localhost:3000/products/'+id)
  }
}
