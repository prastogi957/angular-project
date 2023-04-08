import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent {

  @Input() person:string
  @Input() covid:string

}
