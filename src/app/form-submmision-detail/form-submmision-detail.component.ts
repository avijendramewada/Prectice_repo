import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form-submmision-detail',
  templateUrl: './form-submmision-detail.component.html',
  styleUrls: ['./form-submmision-detail.component.css']
})
export class FormSubmmisionDetailComponent implements OnInit {
 


  constructor() { }

  ngOnInit(): void {
    Object.keys(localStorage).forEach(data => 
      {
        let item = localStorage.getItem(data);
        console.log(item);
        // item is the item from storage.
      });
     
    } 
}




