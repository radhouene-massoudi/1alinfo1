import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  test():void{
    alert('bonjour 1alinfo1');
  }
  second(){
    return new Observable(()=>{
      console.log('observable')
    })
  }
}
