import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: string;
  renderer: Renderer2;
  items = [
    { text: 'green', class: 'green-theme', color: '#00ff00' },
    { text: 'red', class: 'red-theme', color: '#ff0000' },
    { text: 'blue', class: 'blue-theme', color: '#0000ff' },
    { text: 'dark', class: 'dark-theme', color: '#000000' }
  ];
  constructor(
      private storage: Storage,
      private rendererFactory: RendererFactory2,
      @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getThemes() {
    return this.items;
  }

  getDefautTheme(): Observable<any>{
    return Observable.fromPromise( this.storage.get('theme').then(value => {
          this.theme = 'light';
          if (value) {
            this.setTheme(value);
            return this.theme = value;
          } else {
            this.setTheme(value);
            return this.storage.set('theme', this.theme);
          }
        })
    );
  }

  setTheme(theme) {
    this.items.forEach( item => {
      if (item.class === theme) {
        this.renderer.addClass(this.document.body, item.class);
        this.storage.set('theme', item.class);
      } else {
        this.renderer.removeClass(this.document.body, item.class);
      }
    });
  }
}
