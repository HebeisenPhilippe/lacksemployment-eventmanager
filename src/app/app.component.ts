import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'lacksemployment-eventmanager';

  constructor(public oidcSecurityService: OidcSecurityService) {}
  ngOnInit(): void {

    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken }) => {
     // this.oidcSecurityService.authorize();
      console.log('app authenticated', isAuthenticated);
      console.log(`Current access token is '${accessToken}'`);
    });
  }


  login() {
    this.oidcSecurityService.authorize();
    console.log("DID YOU LOGIN?????");
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}
