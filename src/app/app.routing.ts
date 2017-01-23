import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";

export const AppRoutes = [
  { path: '**', redirectTo: 'home'},
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }

];
