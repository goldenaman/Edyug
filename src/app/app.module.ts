import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutUsComponent,
    NavBarComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent
  ],
  exports: [ RouterModule],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: WelcomeComponent },
      {path: 'home', component: WelcomeComponent },
      {path: 'login', component: LoginComponent },
      {path: 'login/signUp', component: SignUpComponent },
      {path: 'signUp', component: SignUpComponent},
      {path: 'aboutUs', component: AboutUsComponent},
      {path: 'login/home', component: WelcomeComponent },
      {path: '**', redirectTo: '' }
    ]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
