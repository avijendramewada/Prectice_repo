import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  data: any;
  userData: any;
  _userdata: any;
  email: any;
  user_name:any;
  _age :any;
  usernumber :any;
  _gender : any;
  _usermessage : any;
 
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    let data = localStorage.getItem('userData') || JSON.stringify([]);
    this.userData = JSON.parse(data);
const userDetail = this.userData.filter((userData: any) => 
userData.user_email == id);
console.log('VALIDATION', userDetail[0].user_email)
this.email = userDetail[0].user_email;
this.user_name = userDetail[0].username;
this.usernumber = userDetail[0].user_number;
this._age = userDetail[0].age;
this._gender = userDetail[0].gender;
this._usermessage = userDetail[0].user_message;



  }
}
