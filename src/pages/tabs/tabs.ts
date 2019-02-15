import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { NavProvider } from '../../providers/nav/nav';
import { Observable } from 'rxjs';
import { RouteLinks } from '../../models/route-link';
import { tap } from 'rxjs/operators';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild(Tabs) tabs: Tabs;

  routes$: Observable<RouteLinks> = this.navProvider.routes$.pipe(
    tap(() => setTimeout(() => {
      NavProvider.forTabs(this.tabs);
    }, 0))
  );

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navProvider: NavProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
