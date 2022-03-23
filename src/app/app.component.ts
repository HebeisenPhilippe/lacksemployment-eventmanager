import {Component, OnInit} from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import {ILanguage} from "./common/interfaces/language";
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./common/services/language.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'lacksemployment-eventmanager';
  languages: ILanguage[] = [];

  constructor(private oidcSecurityService: OidcSecurityService,
              private languageService: LanguageService,
              private translateService: TranslateService) {}

  ngOnInit() {
    this.languages = this.languageService.getAvailableLanguages();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  selectLanguage(language: ILanguage) {
    localStorage.setItem('language', language.code);
    this.translateService.use(language.code);
  }
}
