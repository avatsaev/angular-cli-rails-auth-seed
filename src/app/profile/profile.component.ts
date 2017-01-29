import { Component, OnInit } from '@angular/core';
import {Angular2TokenService, UserData} from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  userData:UserData;

  constructor(private authService:Angular2TokenService) {
    this.userData = this.authService.currentUserData;
    console.log(this.userData)
  }

  ngOnInit() {
  }

}
