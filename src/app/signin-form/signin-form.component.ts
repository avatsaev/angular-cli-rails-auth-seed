import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.sass']
})
export class SigninFormComponent implements OnInit {

  signInUser= {
    email: '',
    password: ''
  };

  @Output() signinFormResult = new EventEmitter<any>();

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit(){

    this.authService.emailSignIn(this.signInUser.email, this.signInUser.password).subscribe(

        res => {
          console.log('res:', res.status);
          if(res.status == 200){
            this.signinFormResult.emit({signedIn: true, res});
          }
        },

        err => {
          console.log('err:', err);
          this.signinFormResult.emit({signedIn: false, err});

        }
    )

  }

}
