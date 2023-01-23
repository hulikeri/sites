import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { PostingPageComponent } from './posting-page/posting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchPageComponent,
    RegistrationPageComponent,
    PostingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
