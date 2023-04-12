import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ProductComponent } from './product/product.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product',      component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
