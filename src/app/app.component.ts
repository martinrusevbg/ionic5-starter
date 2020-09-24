import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LangService } from './services/lang.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  language: string;
  theme: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private langService: LangService,
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.langService.getDefaultLanguage().subscribe(
          lang => {
            if (lang) {
              this.language = lang;
            }
          }
      );
      this.themeService.getDefautTheme().subscribe(
        theme => {
          if (theme) {
            this.theme = theme;
          }
        }
      );
    });
  }
}
