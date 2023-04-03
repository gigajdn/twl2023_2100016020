import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ServicesComponent } from './services/services.component';
import { DatamhsComponent } from './datamhs/datamhs.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ServicesComponent,
    DatamhsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomepageModule { }
