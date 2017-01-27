import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routing";
import { MaterializeModule } from 'angular2-materialize';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from "./home/home.component";
import { BannerComponent } from "./banner/banner.component";

import { Angular2TokenService } from 'angular2-token';
import {AuthService} from "./services/auth.service";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    SigninComponent,
    SignupComponent,
    AuthModalComponent,
    SigninFormComponent,
    SignupFormComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [Angular2TokenService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
