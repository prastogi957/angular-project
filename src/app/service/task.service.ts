import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private variableValue: any;


  constructor() { }

  setVariableValue(value: any) {
    this.variableValue = value;
    console.log("setVariable +  " + this.variableValue['person'] )
  }

  getVariableValue() {
    console.log("getVariableName +  " + this.variableValue)
    return this.variableValue;
  }

}
