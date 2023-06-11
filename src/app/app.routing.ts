import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './login/registration/registration.component';
import { ProductInputComponent } from './product/input/product-input.component';
import { ProductListComponent } from './product/list/product-list.component';
import { LoginComponent } from './login/login/login.component';
import { UserComponent } from './dashboard/user/user.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { JsonComponent } from './dashboard/json/json.component';

const routes: Routes = [ 
  { path: 'regis',        component:RegistrationComponent},
  { path: 'input',        component:ProductInputComponent},
  { path: 'show',        component:ProductListComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'user/dashboard', component: UserComponent },
  { path: 'admin/dashboard', component: AdminComponent },
  { path: 'json', component: JsonComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [

  ]
})
export class AppRoutingModule { }
