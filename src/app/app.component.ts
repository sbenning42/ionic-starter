import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstUsePage } from '../pages/first-use/first-use';
import { Observable } from 'rxjs';
import { RouteLinks, RouteLink } from '../models/route-link';
import { NavProvider } from '../providers/nav/nav';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  routes$: Observable<RouteLinks>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navProvider: NavProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.routes$ = this.navProvider.routes$;

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.navProvider.menuEnabled = false;
      console.log(this.navProvider);
      // this.rootPage = TabsPage;
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
