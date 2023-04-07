import { Component } from '@angular/core';
import {health} from "../../health";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  Health:health[];
  constructor() {
    this.Health = [
    {
      sno: 1,
      title: "Health1",
      des: "Description",
      active: true
    },

    {

      sno: 2,
      title: "Health2",
      des: "Description",
      active: true
    },
    {

      sno: 3,
      title: "Health3",
      des: "Description",
      active: true

      
    },

  ]
  }
}
