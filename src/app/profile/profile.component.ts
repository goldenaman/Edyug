import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
pageTitle = [{fname: 'welcome'}];
  constructor(private profile: ProfileService) {
this.getProfile();
  }
  ngOnInit() {
  }
getProfile = () => {
return this.profile.getProfile().subscribe(
  data => {
    this.pageTitle = data;
  },
  error => {
    console.log(error);
  }
);
}
}
