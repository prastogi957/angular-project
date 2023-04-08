import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-diabetes',
  templateUrl: './diabetes.component.html',
  styleUrls: ['./diabetes.component.css']
})
export class DiabetesComponent {
  @Input() person:string
  @Input() diabetes:string

}
