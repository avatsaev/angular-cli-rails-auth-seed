import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

import {AuthModalComponent} from "../auth-modal/auth-modal.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  @ViewChild(AuthModalComponent) authModalC: AuthModalComponent;

  constructor(protected authService:AuthService) { }

  ngOnInit() {

  }

  ngAfterViewInit(){

  }

  presentSignInModal(){
    this.authModalC.openModal();

  }

}
