import { Component , OnInit} from '@angular/core';
import {Angular2TokenService} from "angular2-token";
import {environment} from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit{

  constructor(private authService: Angular2TokenService){
    this.authService.init(environment.auth_config);
  }


  ngOnInit(){

  }
}
