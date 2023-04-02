import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { ServicesComponent } from './homepage/services/services.component';
import { FaqComponent } from './homepage/faq/faq.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',         component: HomepageComponent},
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
