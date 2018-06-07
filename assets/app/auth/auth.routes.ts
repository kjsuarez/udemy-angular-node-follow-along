import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./authentication.component";
import { LogoutComponent } from "./logout.component";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";

export const AUTH_ROUTES: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full'},  // 'signup' appends to current path, '/signup' = root/signup
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent }
]

export const auth_routing = RouterModule.forRoot(AUTH_ROUTES);
