import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './homepage/example/example.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product',      component:ProductComponent},
  { path: 'json',         component:ExampleComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
