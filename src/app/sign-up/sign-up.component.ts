import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,} from '@angular/common/http';
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
  constructor(private httpclient: HttpClient) {
   }

  ngOnInit() {
  }
  registerInstitute(name: string, institutename: string, email: string, contactnumber: number, city: string, state: string){
    this.sendemailrequestingdemo(name, institutename, email, contactnumber, city, state).subscribe(
      (data) => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  infocollectionForParent(pcode: string) {
    pcode = pcode.toLowerCase();
  }
  sendemailrequestingdemo(name: string, institutename: string, email: string, contactnumber: number, city: string, state: string){
    return this.httpclient.post(this.baseUrl + '/sendsignupmail', { name, institutename, email, contactnumber, city, state } );
  }
}
