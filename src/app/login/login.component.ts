import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {Auth} from '../auth.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isauthorized: string;

  constructor(private auths: AuthService, private route: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  validateInstitute(username: string, instituteId: string, password: string) {
    this.isauthorized = this.auths.validateInstitute(username, instituteId, password);
    console.log(this.isauthorized)
    this.route.navigateByUrl('/profile');
  }
}
