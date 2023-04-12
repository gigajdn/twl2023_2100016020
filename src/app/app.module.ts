import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { HomepageComponent } from './homepage/homepage.component';
// import { HomepageModule } from './homepage/homepage.module';
import { TopComponent } from './nav/top/top.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
