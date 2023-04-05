import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { ServicesComponent } from './homepage/services/services.component';
import { FaqComponent } from './homepage/faq/faq.component';
import { DashboardComponent } from './homepage/dashboard/dashboard.component';

const routes: Routes = [ 
  // { path: '', redirectTo: '#', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about',        component: AboutComponent},
  { path: 'contact',      component: ContactComponent},
  { path: 'services',     component: ServicesComponent},
  { path: 'faq',          component: FaqComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
