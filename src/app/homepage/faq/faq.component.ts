import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
        
  }

  faqs: any = [
    {
      id: 1,
      question: 'What is Angular?',
      answer: 'Angular is a TypeScript-based open-source web application framework developed by Google.'
    },
    {
      id: 2,
      question: 'What is TypeScript?',
      answer: 'TypeScript is a superset of JavaScript that adds.'
    }
  ]
}

