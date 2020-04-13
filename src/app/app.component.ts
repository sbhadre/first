import { Component, OnInit } from '@angular/core';
import {Employee} from './Employee'
import { EmpService } from './emp.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  constructor( private e1:EmpService){}
  emp : any[] = [];

  ngOnInit(){
    this.emp = this.e1.getEmployees();
  }
}
