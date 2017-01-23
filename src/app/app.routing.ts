import {HomeComponent} from "./home/home.component";
export const AppRoutes = [
  { path: '**', redirectTo: 'home'},
  { path: "home", component: HomeComponent }
];
