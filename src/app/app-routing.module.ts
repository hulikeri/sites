import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const appRoutes: Routes = [
  {
    path: 'loginPage', component: LoginPageComponent, pathMatch: 'full',
  },
  {
path: 'registrationPage', component: RegistrationPageComponent, pathMatch: 'full'
  },
  {
    path: 'searchPage', component: SearchPageComponent, pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
