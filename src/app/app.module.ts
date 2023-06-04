import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// mat module
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// import { HomepageComponent } from './homepage/homepage.component';
// import { HomepageModule } from './homepage/homepage.module';
import { TopComponent } from './nav/top/top.component';
import { ExampleComponent } from './homepage/example/example.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductInputComponent } from './product/input/product-input.component';
import { ProductListComponent } from './product/list/product-list.component';
import { NumberPipe } from './product/number.pipe';
import { RupiahPipe } from './product/rupiah.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './product/input/popup.component';




@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ExampleComponent,
    RegistrasiComponent,
    RegistrationComponent,
    ProductInputComponent,
    ProductListComponent,
    PopupComponent,
    NumberPipe,
    RupiahPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
