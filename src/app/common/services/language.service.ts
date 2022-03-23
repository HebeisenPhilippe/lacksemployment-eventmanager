import { Injectable } from '@angular/core';
import {ILanguage} from "../interfaces/language";
import {marker as _} from "@biesbjerg/ngx-translate-extract-marker";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages: ILanguage[] = [
    {code: 'en', name: _('English')},
    {code: 'de', name: _('Deutsch')}
  ]
  constructor() { }

  getAvailableLanguages() {
    return this.languages;
  }
}
