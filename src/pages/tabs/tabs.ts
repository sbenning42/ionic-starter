import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavProvider } from '../../providers/nav/nav';
import { Observable } from 'rxjs';
import { RouteLinks } from '../../models/route-link';

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

  routes$: Observable<RouteLinks>/* = this.navProvider.routes$*/;

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
