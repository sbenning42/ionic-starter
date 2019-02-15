import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs';
import { RouteLinks, RouteLink, RouteLinkPageId } from '../models/route-link';
import { NavProvider } from '../providers/nav/nav';
import { TabsPage } from '../pages/tabs/tabs';
import { tap, switchMap } from 'rxjs/operators';
import { FirstUsePage } from '../pages/first-use/first-use';
import { StorageProvider } from '../providers/storage/storage';
import { Entry, EntryName } from '../models/entry';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any;
  routes$: Observable<RouteLinks> = this.navProvider.routes$;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public navProvider: NavProvider,
    public storageProvider: StorageProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.initializeData();
  }

  openRoute(route: RouteLink) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navProvider.select(route.id);
  }

  initializeData() {
    Observable.fromPromise(this.platform.ready()).pipe(
      switchMap(() => this.storageProvider.load())
    ).subscribe((entries: Array<Entry> = []) => {
      this.navProvider.menuEnabled = false;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const firstUse = entries.find(entry => entry.key === EntryName.firstUse);
      const credentials = entries.find(entry => entry.key === EntryName.credentials);
      console.log(firstUse, entries);
      if (!firstUse || firstUse.value !== false) {
        this.navProvider.setRoot(RouteLinkPageId.firstUse);
      } else if (!credentials) {
        this.navProvider.setRoot(RouteLinkPageId.welcome);
      } else {
        this.navProvider.setRoot(RouteLinkPageId.tabs);
      }
    });
  }

}
