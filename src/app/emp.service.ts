import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {

  getEmployees():any[]{
    return [
      {
        name : "ABC",
        id : 1
      },
      {
        name : "XYZ",
        id : 2
      },
      {
          name : "PQR",
        id : 3
      }
    ]
  }

}