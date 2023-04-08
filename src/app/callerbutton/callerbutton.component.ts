import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../service/web-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-callerbutton',
  templateUrl: './callerbutton.component.html',
  styleUrls: ['./callerbutton.component.css']
})
export class CallerbuttonComponent {
  users:any

  constructor(private useData: WebServiceService) {
    this.useData.getAllPosts().subscribe((data)=>{
      console.log(data)
      this.users=data
    })
  }
}
