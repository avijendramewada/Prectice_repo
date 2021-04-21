import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';


@Component({
  selector: 'app-edit-user-detail',
  templateUrl: './edit-user-detail.component.html',
  styleUrls: ['./edit-user-detail.component.css']
})
export class EditUserDetailComponent implements OnInit {
  submitted = false;
  formData: any = {
   
  };
  userData:any[] = [];
  userForm:any;
  data: any;
  user_Data:any;
  _userdata: any;
  email: any;
  user_name:any;
  _age :any;
  usernumber :any;
  _gender : any;
  _usermessage : any;
  user_email :any;
  constructor( private router:Router,private route :ActivatedRoute) {
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let data = localStorage.getItem('userData') || JSON.stringify([]);
    this.user_Data = JSON.parse(data);
const userDetail = this.user_Data.filter((user_Data: any) => {
 return user_Data.user_email == id});
console.log('VALIDATION', userDetail[0].user_email)
this.email =userDetail[0].user_email;
this.user_name = userDetail[0].username;
this.usernumber = userDetail[0].user_number;
this._age = userDetail[0].age;
this._gender = userDetail[0].gender;
this._usermessage = userDetail[0].user_message;
console.log('username getting',this.user_name);
this.formData.name=this.user_name;
this.formData.user_email=this.email;
this.formData.user_number =this.usernumber
this.formData.age=this._age
this.formData.user_message=this._usermessage

  }
 
  RegisterUser(userForm: NgForm): void {
    this.submitted = true;
  
    if (userForm.value.username == undefined || userForm.value.user_email == undefined || userForm.value.user_number ==undefined || userForm.value.age==undefined || userForm.value.gender ==undefined){
     
      return 
  }
     else {
      // console.log('formData',JSON.stringify(userForm.value) );
      // localStorage.setItem('userData',JSON.stringify(userForm.value));
      // this.router.navigateByUrl('/detail');
      const id = this.route.snapshot.paramMap.get('id');
      let data = localStorage.getItem('userData') || JSON.stringify([]);
      this.user_Data = JSON.parse(data);
    const userDetail = this.user_Data.filter((userData: any) => {
     return userData.user_email !== id });
     userDetail.push(userForm.value);
    console.log( 'userdetail ', this.userData);
    localStorage.setItem('userData',JSON.stringify(userDetail))
    this.router.navigateByUrl('/detail');
       }
    } 
}

