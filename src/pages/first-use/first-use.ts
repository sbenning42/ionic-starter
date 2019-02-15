import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavProvider } from '../../providers/nav/nav';
import { RouteLinkPageId } from '../../models/route-link';

/**
 * Generated class for the FirstUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-use',
  templateUrl: 'first-use.html',
})
export class FirstUsePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navProvider: NavProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstUsePage');
  }

  getStarted() {
    this.navProvider.setRoot(RouteLinkPageId.welcome);
  }

}
