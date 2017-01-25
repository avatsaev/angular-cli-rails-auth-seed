import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit {

  @Input() mode = 'signIn';

  @Output() authModalActions = new EventEmitter<string|MaterializeAction>();

  signInUser= {
    email: '',
    password: ''
  };

  constructor(protected authService:AuthService) { }


  ngOnInit() {
  }


  openModal(){
    this.authModalActions.emit({action:"modal",params:['open']});
  }


  closeModal(){
    this.authModalActions.emit({action:"modal",params:['close']});
  }


  onSignInSubmit(){

    console.log('signInUser', this.signInUser);
    this.authService.emailSignIn(this.signInUser.email, this.signInUser.password).subscribe( res => {
      console.log(res.status)

      if(res.status == 200){
        this.closeModal();
      }
    })

  }



}
