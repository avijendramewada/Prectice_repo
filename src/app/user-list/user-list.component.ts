import { Component, OnInit } from '@angular/core';
import { UsersService} from '../users.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userservice: UsersService) { }
  collection: any[] = [];
  ngOnInit(): void {
    this.userservice.getData().subscribe((result: any) =>{
      console.log('result ',result);
      this.collection = result.data
      console.log('collection ',this.collection);
    })
  }
}
