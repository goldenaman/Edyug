import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Auth} from '../app/auth.model';
import { catchError, retry } from 'rxjs/operators';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username: string;
  password: string;
  instituteId: string;
  auth: Auth;
  data: any;
  httpHeadrs = new HttpHeaders({'Content-Type': 'application/json'});
  public errors: any = [];
   // the actual JWT token
   public token: string;
   public isallowed: string;
   public obj: any;
 
   // the token expiration date
   public token_expires: Date;
   baseUrl = 'http://127.0.0.1:8000';
  constructor( private http: HttpClient) {
  }
  validateInstitute(username: string, instituteId: string, password: string) {
    this.auth = new Auth();
    console.log(username, password);
   this.auth.username = username;
   this.auth.password = password;
   this.checkAuthentication(this.auth).subscribe(
    data => {
      this.token = data.body.access_token;
      return this.isallowed = data.body.isallowed;
    },
    error => {
      console.log(error);
    }
  );
  console.log(this.token);
  return this.isallowed;
  }
   checkAuthentication(auth: Auth): Observable<any> {
     console.log('inside auth method');
     return this.http.post(this.baseUrl + '/auth', auth, {headers : this.httpHeadrs, observe: 'response'});
   }
}
