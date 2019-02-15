import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs';
import { RouteLinks, RouteLink } from '../models/route-link';
import { NavProvider } from '../providers/nav/nav';
import { TabsPage } from '../pages/tabs/tabs';
import { tap } from 'rxjs/operators';
import { FirstUsePage } from '../pages/first-use/first-use';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = FirstUsePage;
  routes$: Observable<RouteLinks> = this.navProvider.routes$;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navProvider: NavProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.navProvider.menuEnabled = false;
    });
  }

  openRoute(route: RouteLink) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navProvider.select(route.id);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
