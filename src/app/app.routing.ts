import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './homepage/example/example.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [ 
  { path: 'product',      component:ProductComponent},
  { path: 'json',         component:ExampleComponent},
  { path: 'regis',        component:RegistrationComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
