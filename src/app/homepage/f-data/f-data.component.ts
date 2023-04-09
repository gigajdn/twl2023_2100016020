import { Component } from '@angular/core';
import { ApiFDataService } from './api.f-data.service';

@Component({
  selector: 'app-f-data',
  template: `
  <h1>{{ title }}</h1>    
  <ol>
    <li *ngFor="let item of data">
      {{ item.nama }} <br/> 
      {{ item.nim }} <br/> 
      {{ item.alamat }} <br/>
      <br/>
    </li>
  </ol>
  `
  ,
  styleUrls: ['./f-data.component.scss']
})
export class FDataComponent {
  title = "App";
  data : any;

  constructor(private ApiFDataService: ApiFDataService) {}

  ngOnInit() {
    this.ApiFDataService.getGuide().subscribe(data => {
      this.data = data;
    })
  }
}
