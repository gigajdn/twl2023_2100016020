import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-example',
  template: `
  <h1>{{ title }}</h1>
    <ol>
      <li *ngFor="let item of data">
        {{ item.name }} <br>
        {{ item.email }} <br>
        {{ item.body }} <br>
      </li>
    </ol>
    `,
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  title = 'My App';
  data: any;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.exampleService.getGuide().subscribe(data => {
      this.data = data;
    });
  }
}