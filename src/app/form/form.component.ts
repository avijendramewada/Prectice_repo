import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formData: any = {
  
  };
  constructor() {
  }

  ngOnInit(): void {
  }

  register(): void {
    console.log(this.formData);
    var myObj = [this.formData];
    localStorage.setItem(myObj[2], JSON.stringify(myObj));
  }
}
