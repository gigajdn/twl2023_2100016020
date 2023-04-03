import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomepageComponent } from './homepage/homepage.component';
import { HomepageModule } from './homepage/homepage.module';
import { TopComponent } from './nav/top/top.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomepageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
