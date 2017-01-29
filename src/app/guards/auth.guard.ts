import { Injectable }     from '@angular/core';
import {AuthService} from "../services/auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate() {

    if(!this.authService.userLoggedIn())
      this.router.navigate(['/signin']);

    return this.authService.userLoggedIn();
  }

}
