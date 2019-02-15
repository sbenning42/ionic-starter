import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavProvider } from '../../providers/nav/nav';
import { RouteLinkPageId } from '../../models/route-link';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navProvider: NavProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signin() {
    this.navProvider.setRoot(RouteLinkPageId.tabs);
  }

}
