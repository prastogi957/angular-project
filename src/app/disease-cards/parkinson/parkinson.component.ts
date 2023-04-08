import { Component,Input } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-parkinson',
  templateUrl: './parkinson.component.html',
  styleUrls: ['./parkinson.component.css']
})
export class ParkinsonComponent {

  @Input() person:string;
  @Input() parkinson:any

}
