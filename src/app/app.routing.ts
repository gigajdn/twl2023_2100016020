import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './homepage/about/about.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { ServicesComponent } from './homepage/services/services.component';
import { DatamhsComponent } from './homepage/datamhs/datamhs.component';
import { FaqComponent } from './homepage/faq/faq.component';


const routes: Routes = [ 
  // { path: '', redirectTo: '#', pathMatch: 'full'},
  // { path: '**', redirectTo: 'home', pathMatch: 'full'},
  { path: '',         component: HomepageComponent},
  { path: 'about',        component: AboutComponent},
  { path: 'contact',      component: ContactComponent},
  { path: 'services',     component: ServicesComponent},
  { path: 'mahasiswa',    component: DatamhsComponent},
  { path: 'faq',          component: FaqComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
