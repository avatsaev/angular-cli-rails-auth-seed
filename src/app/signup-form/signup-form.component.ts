import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.sass']
})
export class SignupFormComponent implements OnInit {
  signUpUser = {
    email: '',
    password: '',
    password_conformation: ''

  };

  @Output() signUpFormResult = new EventEmitter<any>();

  constructor(protected authService:AuthService) { }

  ngOnInit() {
  }

  onSignUpSubmit(){

    this.authService.signUp(this.signUpUser.email, this.signUpUser.password, this.signUpUser.password_conformation).subscribe(

        res => {
          console.log('res:', res.status);
          if (res.status == 200){
            this.authService.emailSignIn(this.signUpUser.email, this.signUpUser.password);
            this.signUpFormResult.emit({signedUp: true, res})
          }
        },

        err => {
          console.log('err:', err);
          this.signUpFormResult.emit({signedUp: false, err})

        }
    )

  }
}
