import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DisplayChangeColorDirective } from './display-change-color.directive';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DisplayChangeColorDirective,
    MenuComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
