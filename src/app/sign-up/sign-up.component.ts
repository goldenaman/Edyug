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
  infocollectionForParent(pcode: string) {
    pcode = pcode.toLowerCase();
  }
}
