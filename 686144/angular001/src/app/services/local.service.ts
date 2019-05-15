import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
myPI=3.14

score=[20,35]

welcome=function(){
  console.log('Angular 7 services learning')
}
  constructor() { }
}
