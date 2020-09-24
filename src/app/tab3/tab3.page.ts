import { Component } from '@angular/core';
import {ThemeService} from '../services/theme.service';
import { DomSanitizer } from '@angular/platform-browser';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public title: string;
  language: any;
  items;
  constructor(
      private theme: ThemeService,
      private sanitizer: DomSanitizer,
      private langService: LangService
      ) {
    this.items = theme.getThemes();
    this.langService.getDefaultLanguage().subscribe(
      lang => {
        this.language = lang;
      }
    );
  }

  setTheme(theme) {
    this.theme.setTheme(theme);
  }

  getDynamicColor(color) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar: ${color}`);
  }

  changeLanguage(): void {
    this.langService.setLanguage(this.language);
  }
}
