import { Component, Input } from '@angular/core';
import {EmpService} from './emp.service';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'hello-app',
  template: `<h1>Hello Compoent</h1>
  <p>Result is {{result}}</p>`

})
export class HelloComponent  {

constructor(private e1: CalculatorService){};

 a=10;b=15;

result = this.e1.mul(this.a,this.b);
  
}
