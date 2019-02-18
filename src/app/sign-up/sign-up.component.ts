import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,} from '@angular/common/http';
import { UserService } from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  pcodeValid: boolean;
  accesstoken: string;
  rsponse;
  baseUrl = 'http://127.0.0.1:8000';
  httpHeadrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpclient: HttpClient, private user: UserService) {
   }

  ngOnInit() {
  }
  infocollectionForParent(pcode: string) {
    pcode = pcode.toLowerCase();
  }
  registerInstitute(name: string, institutename: string, phone: number, city: string, state: string) {
    console.log('inside mthod');
    this.setuser(name, institutename, phone, city, state);
    return this.httpclient.post(this.baseUrl + '/register', this.user,
    {headers: this.httpHeadrs});
  }
  setuser(username: string, institutename: string, phone: number, city: string, state: string){
    this.user.city = city;
    this.user.state = state;
    this.user.username = username;
    this.user.phone = phone;
    this.user.institutename = institutename;
  }
}
