import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  instituteId: string;

  constructor(private auth: AuthService, private user: UserService) { }

  ngOnInit() {
  }
  validateInstitute(username: string, instituteId: string, password: string) {
    this.auth.setUser(username, instituteId, password);
  }
  validateUser(username: string, password: string) {
    this.auth.setUser(username, password, '');
  }
}
