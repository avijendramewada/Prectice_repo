import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormSubmmisionDetailComponent} from  './form-submmision-detail/form-submmision-detail.component'
import { EditUserDetailComponent } from './edit-user-detail/edit-user-detail.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { UserListComponent } from './user-list/user-list.component'
const routes: Routes = [
 {path:'form', component: FormComponent},
{path:"",component: UserListComponent },
//  {path:'', component: HomeComponent},
 {path: 'detail', component: FormSubmmisionDetailComponent},
 {path:'viewdetail/:id', component: UserDetailComponent},
 {path: 'editRecord/:id' , component: EditUserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
