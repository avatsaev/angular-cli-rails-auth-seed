import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {SignInUpGuard} from "./guards/sign_in_up.guard";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";

export const AppRoutes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], pathMatch: 'full' },
  { path: "signin", component: SigninComponent, canActivate: [SignInUpGuard], pathMatch: 'full' },
  { path: "signup", component: SignupComponent, canActivate: [SignInUpGuard], pathMatch: 'full'},
  { path: '**', component: HomeComponent}

];
