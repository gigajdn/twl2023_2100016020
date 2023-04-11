import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { ServicesComponent } from './homepage/services/services.component';
import { FaqComponent } from './homepage/faq/faq.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { FDataComponent } from './homepage/f-data/f-data.component';
import { DataComponent } from './homepage/data/data.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'about',        component: AboutComponent},
  { path: 'contact',      component: ContactComponent},
  { path: 'services',     component: ServicesComponent},
  { path: 'faq',          component: FaqComponent},
  { path: 'mhs',          component:FDataComponent},
  { path: 'formulir',     component:DataComponent},
  { path: 'product',      component:ProductComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
