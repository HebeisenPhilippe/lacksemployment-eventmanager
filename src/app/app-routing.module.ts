import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './utils/app.guard';
import { environment } from 'src/environments/environment';
import { AuthModule } from 'angular-auth-oidc-client';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], },
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

@NgModule({
  imports: [AuthModule.forRoot({
      config: {
          authority: 'https://app.please-open.it/auth/realms/51a2591c-8df8-4a7b-a6fd-6d80dd15b1cb',
          autoUserInfo: false,
          redirectUrl: window.location.origin,
          postLogoutRedirectUri: window.location.origin,
          clientId: 'backend-service-eventmanager',
          scope: 'openid profile email offline_access blogs',
          responseType: 'code',
          silentRenew: true,
          silentRenewUrl: window.location.origin + '/silent-renew.html',
          renewTimeBeforeTokenExpiresInSeconds: 10,
          secureRoutes: [environment.apiUrl]
      }
    }), RouterModule.forRoot(routes)],
  exports: [AuthModule, RouterModule],
})
export class AppRoutingModule {}
