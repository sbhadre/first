import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
 ans =0;
  add(a :number, b:number):number{
    this.ans = a +b;
    return this.ans;
  }
  sub(a :number, b:number):number{
    this.ans = a -b;
    return this.ans;
  }
  mul(a :number, b:number):number{
    this.ans = a *b;
    return this.ans;
  }
  div(a :number, b:number):number{
    this.ans = a /b;
    return this.ans;
  }

}