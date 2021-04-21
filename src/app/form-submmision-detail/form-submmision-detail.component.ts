import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-form-submmision-detail',
  templateUrl: './form-submmision-detail.component.html',
  styleUrls: ['./form-submmision-detail.component.css']
})
export class FormSubmmisionDetailComponent implements OnInit {
 
  userData:any[] = [];
  useremail: any;
  data: any;
  

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || JSON.stringify([]));
    
  } 
  viewdetail(useremail: any){
    this.router.navigate(['/viewdetail',useremail]);
  }
  deleteRecord(_id: any){
    console.log( 'email coming: ', _id)
    let data = localStorage.getItem('userData') || JSON.stringify([]);
    this.userData = JSON.parse(data);
  const userDetail = this.userData.filter((userData: any) => {
   return userData.user_email !== _id });
  console.log( 'userdetail ', userDetail);
  localStorage.setItem('userData',JSON.stringify(userDetail))
  window.location.reload();
  // this.router.navigate(['/detail']);
  
   
    }
    editRecord (user_id :any) {
      console.log('edit email',user_id);
      this.router.navigate(['/editRecord',user_id])
        }
  
}




