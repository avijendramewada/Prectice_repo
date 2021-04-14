import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: any = {
  
  };
  constructor( private router:Router) {
  }

  ngOnInit(): void {
  }

  RegisterUser(userForm: NgForm): void {  
   var userData = []; 
    var username= userForm.value.username;
    var user_email= userForm.value.user_email;
    var user_number= userForm.value.user_number;
    var age= userForm.value.age;
    var gender= userForm.value.gender;
    var user_message= userForm.value.user_message;
    userData = [username, user_email, user_number, age, gender, user_message];
    localStorage.setItem(user_email, JSON.stringify(userData));
    //redirect the page after the submit the form
    this.router.navigate(['/detail']);
  }
   
}
