import { Component } from '@angular/core';
import { WebServiceService } from './service/web-service.service';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Health-Report';
  users:any
  person:string
  covid:string
  parkinson:any
  heart:string
  diabetes:string

  //diab_prediction,heart_prediction,parkinson_prediction,covid_prediction app.component.ts:27:12


  constructor(private useData: WebServiceService, private valuePasser:TaskService) {
    this.useData.getAllPosts().subscribe((data)=>{
    this.person=data['person']
    this.covid=data['covid_prediction']
    this.parkinson=data['parkinson_prediction']
    this.heart=data['heart_prediction']
    this.diabetes=data['diab_prediction']
    console.log("fodho "+Object.keys(data))
    this.valuePasser.setVariableValue(this.parkinson)
    })

    

   
}
refresher(){
  this.useData.getAllPosts().subscribe((data)=>{
   // console.log(data['person'])
    this.person=data['person']
    this.covid=data['covid']
    this.parkinson=data['parkinson']
    this.heart=data['heart']
    this.diabetes=data['diabetes']
    this.valuePasser.setVariableValue(this.parkinson)
  })
}
}
