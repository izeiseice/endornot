import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

export const router: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
]

export const firebaseConfig = {
  apiKey: "AIzaSyAU014l89rrd6eCWE6kNqnU8ljilz2SkOo",
  authDomain: "endornot-943e7.firebaseapp.com",
  databaseURL: "https://endornot-943e7.firebaseio.com",
  projectId: "endornot-943e7",
  storageBucket: "",
  messagingSenderId: "286319266255"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(router),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService, AngularFireDatabase, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
