import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
