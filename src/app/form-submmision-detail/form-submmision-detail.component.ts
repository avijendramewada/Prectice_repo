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
 

  constructor(private router :Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData') || JSON.stringify([]));
    
  } 
  viewdetail(useremail: any){
    this.router.navigate(['/viewdetail',useremail]);
  }
}




