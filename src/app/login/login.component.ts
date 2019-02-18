import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {Auth} from '../auth.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public auth: Auth;

  constructor(private auths: AuthService, private user: UserService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  validateInstitute(username: string, instituteId: string, password: string) {
    this.auth = new Auth();
    console.log(username,password)
   this.auth.username = username;
   this.auth.password = password;
   console.log(this.auth.username, this.auth.password);
   this.checkAuthentication(this.auth);
    this.route.navigateByUrl('/profile');
  }
  checkAuthentication(auth: Auth) {
    console.log('inside auth method');
    return this.http.post<any>('localhost:8000/auth', { auth });
  }
}
