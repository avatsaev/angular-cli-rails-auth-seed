import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";
import {AuthMode} from '../services/auth.service'

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})



export class AuthModalComponent implements OnInit {


  @Input() mode:AuthMode;
  @Output() authModalActions = new EventEmitter<string|MaterializeAction>();

  constructor() {}

  ngOnInit() {}


  openModal(mode:AuthMode = AuthMode.signin){
    this.mode = mode;
    this.authModalActions.emit({action:"modal",params:['open']});
  }


  closeModal(){
    this.authModalActions.emit({action:"modal",params:['close']});
  }

  onSignUpResult(res){
    console.log('onSignUpResult()', res);
    if(res.signedUp) this.closeModal();
  }

  onSignInResult(res){
    console.log('onSignInResult()', res);
    if(res.signedIn) this.closeModal();
  }

  setSignInMode(){this.mode = AuthMode.signin}
  setSignUpMode(){this.mode = AuthMode.signup}

  isSignInMode(){return this.mode == AuthMode.signin}
  isSignUpMode(){return this.mode == AuthMode.signup}


}
