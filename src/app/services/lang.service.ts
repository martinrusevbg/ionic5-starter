import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  lang: string;
  constructor(
      private translate: TranslateService,
      private storage: Storage
  ) { }

  getDefaultLanguage(): Observable<any>{
    return Observable.fromPromise( this.storage.get('lang').then(value => {
        this.lang = 'en';
        if (value) {
            this.translate.use(value);
            return this.lang = value;
        } else {
            this.translate.use(this.lang);
            return this.storage.set('lang', this.lang);
        }
      })
    );
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
    this.storage.set('lang', setLang);
  }
}
