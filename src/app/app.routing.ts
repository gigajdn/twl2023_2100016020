import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './homepage/example/example.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductInputComponent } from './product/input/product-input.component';
import { ProductListComponent } from './product/list/product-list.component';

const routes: Routes = [ 
  { path: 'json',         component:ExampleComponent},
  { path: 'regis',        component:RegistrationComponent},
  { path: 'input',        component:ProductInputComponent},
  { path: 'show',        component:ProductListComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
