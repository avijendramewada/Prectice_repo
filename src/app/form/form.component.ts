import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService} from '../users.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted = false;
  formData: any = {
  
  };
  
  userData:any[] = [];
  user_email :any;
  constructor( private router:Router,private userservice: UsersService) {
  }

  ngOnInit(): void {
    this.userservice.getData().subscribe((result) =>{
      console.log('result',result)
    })
    //  this.user_email: [Validators.email] 
  }

  RegisterUser(userForm: NgForm): void {
    this.submitted = true;
    // let data = localStorage.getItem('userData') || JSON.stringify([]);
    // this.userData = JSON.parse(data);
    // let userExist =  this.userData.filter(_userdata =>{
    //   return _userdata.user_email == userForm.value.user_email;
    // })
    // console.log(userForm.value.username)
    // console.log('userExist',userExist)
    // if(userExist.length){
    //   return alert('User already exist');
    // }
    
     if (userForm.value.username == undefined || userForm.value.user_email == undefined || userForm.value.user_number ==undefined ){
        return 
    }
     else{
      // this.userservice.createUser(userForm.value);
       
     

     // this.submitted = true;
      // this.userData.push(userForm.value);
      // localStorage.setItem('userData',JSON.stringify(this.userData));
      // this.router.navigateByUrl('/detail');
    }

    
    // var userData = []; 
    // var username= userForm.value.username;
    // var user_email= userForm.value.user_email;
    // var user_number= userForm.value.user_number;
    // var age= userForm.value.age;
    // var gender= userForm.value.gender;
    // var user_message= userForm.value.user_message;
    // userData = [username, user_email, user_number, age, gender, user_message];
    // localStorage.setItem(user_email, JSON.stringify(userData));
    // //redirect the page after the submit the form
    // this.router.navigate(['/detail']);
  }
   
}
