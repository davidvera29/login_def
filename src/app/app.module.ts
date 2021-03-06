import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountComponent } from './components/account/account.component';
import { IdentityService } from './services/identity.service';
import { AuthorizationGuard } from './guards/authorization.guard';
import { TranslatePipe } from './pipes/translate-pipe';
import { TranslateTransformPipe } from './pipes/translate-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    AccountComponent,
    TranslateTransformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'account', component: AccountComponent, canActivate: [AuthorizationGuard] },
      {path: '**', redirectTo: ''}
    ]),
    HttpClientModule
  ],
  providers: [
    IdentityService,
    AuthorizationGuard,
    TranslatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
