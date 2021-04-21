import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
url ="https://reqres.in/api/users?page=2";
  constructor( private http:HttpClient) { }
  getData(){
   return this.http.get(this.url);
    // console.warn('get data:',)
  }
//   createUser(userData:any){
//     console.warn('service data:', userData)
//  this.http.post(this.url,userData);
//   }
}
