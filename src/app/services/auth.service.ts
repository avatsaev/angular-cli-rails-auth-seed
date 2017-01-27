import { Injectable } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

import {environment} from '../../environments/environment'
import {Observable, BehaviorSubject} from "rxjs";
import {Response} from "@angular/http";



@Injectable()

export class AuthService {

  userLoggedInSubject = new BehaviorSubject<boolean>(this.userLoggedIn());

  constructor(private tokenService: Angular2TokenService) {
    console.log("init auth service...");
    this.tokenService.init(environment.auth_config);
  }


  emailSignIn(email, password):  Observable<Response>{

    let sub = this.tokenService.signIn({
      email:    email,
      password: password
    });

    sub.subscribe( () => this.userLoggedInSubject.next(true));

    return sub;


  }

  signOut(): Observable<Response>{

    let sub = this.tokenService.signOut();
    sub.subscribe( () => this.userLoggedInSubject.next(this.userLoggedIn()));
    return sub;
  }

  signUp(email, password, passwordConfirmation): Observable<Response>{

    let sub = this.tokenService.registerAccount({
      email:                email,
      password:             password,
      passwordConfirmation: passwordConfirmation
    });

    return sub;
  }

  validateToken(): Observable<Response>{
    return this.tokenService.validateToken()
  }

  userLoggedIn():boolean{
    console.log('userLoggedIn', this.tokenService.userSignedIn());
    return this.tokenService.userSignedIn();
  }


  userLoggedIn$():Observable<boolean>{
    return this.userLoggedInSubject.asObservable();
  }

}


export enum AuthMode {
  signin,
  signup
}
