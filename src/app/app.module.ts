import {NgModule, APP_INITIALIZER, LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from './common/common.module';
import { HomeComponent } from './pages/home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AuthInterceptor, AuthModule} from 'angular-auth-oidc-client';
import { environment } from "../environments/environment";
import { KeycloakFactory } from "./common/factories/keycloak.factory";
import {LocaleFactory} from "./common/factories/locale.factory";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./common/factories/http-loader.factory";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    KeycloakAngularModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AuthModule.forRoot({
      config: {
        authority: 'https://app.please-open.it/auth/realms/51a2591c-8df8-4a7b-a6fd-6d80dd15b1cb',
        autoUserInfo: false,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'le-frontend',
        scope: 'openid profile email offline_access blogs',
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: false,
        responseType: 'code',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        renewTimeBeforeTokenExpiresInSeconds: 10,
        secureRoutes: [environment.apiUrl]
      }
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: KeycloakFactory,
      multi: true,
      deps: [KeycloakService]
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'apiUrl', useValue: environment.apiUrl },
    {
      provide: APP_INITIALIZER,
      useFactory: LocaleFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
