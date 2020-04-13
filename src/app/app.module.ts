import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OddPipe } from './odd.pipe';
import { EmpService } from './emp.service';
import { CalculatorService } from './calculator.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, OddPipe ],
  bootstrap:    [ AppComponent ],
  providers: [EmpService, CalculatorService]
})
export class AppModule { }
