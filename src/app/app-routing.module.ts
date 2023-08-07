import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    component: DashboardComponent,
    path: '',
  }, {
    component: SellerAuthComponent,
    path: 'seller-auth',
  }, {
    component: SignupComponent,
    path: 'signup',
    pathMatch: 'full'
  }, {
    component: LoginComponent,
    path: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
