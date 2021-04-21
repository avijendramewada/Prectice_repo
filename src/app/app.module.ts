import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormSubmmisionDetailComponent } from './form-submmision-detail/form-submmision-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserDetailComponent } from './edit-user-detail/edit-user-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormSubmmisionDetailComponent,
    UserDetailComponent,
    EditUserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
