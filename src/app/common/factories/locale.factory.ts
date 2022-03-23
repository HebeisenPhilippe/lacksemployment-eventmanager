import {TranslateService} from "@ngx-translate/core";


export function LocaleFactory(translateService: TranslateService): () => Promise<string> {
  return () =>
    new Promise<string>((resolve, reject) => {
      const lang = localStorage.getItem('language');
      if (lang) {
        translateService.use(lang).subscribe(() => {
          resolve(lang)
        })
      } else {
        resolve('en-US')
      }
    })
}
