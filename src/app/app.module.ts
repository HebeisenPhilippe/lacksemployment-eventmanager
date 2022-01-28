import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material.module';
import { HomeComponent } from './pages/home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {initializeKeycloak} from './utils/app.keycloak';
import { PlayerServices } from './services/players.services';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './common/dialog/dialog.component';
import { AuthInterceptor } from 'angular-auth-oidc-client';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PlayerServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
