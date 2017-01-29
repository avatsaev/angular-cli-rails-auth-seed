import { Injectable }     from '@angular/core';
import {CanActivate, Router}    from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable()
export class SignInUpGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate() {
    if(this.authService.userLoggedIn()) this.router.navigate(['/profile']);
    return !(this.authService.userLoggedIn());
  }

}
