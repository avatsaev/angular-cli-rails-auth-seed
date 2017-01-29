import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  constructor(protected authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignInResult(res){
    if(res.signedIn) this.router.navigate(['/profile']);
  }

}
