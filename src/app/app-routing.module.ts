import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormSubmmisionDetailComponent} from  './form-submmision-detail/form-submmision-detail.component'
const routes: Routes = [
 {path:'form', component: FormComponent},
 {path:'', component: HomeComponent},
 {path: 'detail', component: FormSubmmisionDetailComponent},
 {path:'viewdetail/:id', component: UserDetailComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
