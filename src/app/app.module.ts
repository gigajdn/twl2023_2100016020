import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import { HomepageComponent } from './homepage/homepage.component';
// import { HomepageModule } from './homepage/homepage.module';
import { TopComponent } from './nav/top/top.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { FDataComponent } from './homepage/f-data/f-data.component';




@NgModule({
  declarations: [
    AppComponent,
    // HomepageComponent,
    TopComponent,
    DashboardComponent,
    FDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // HomepageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
