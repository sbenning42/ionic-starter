import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavProvider } from '../../providers/nav/nav';
import { RouteLinkPageId } from '../../models/route-link';
import { StorageProvider } from '../../providers/storage/storage';
import { EntryName } from '../../models/entry';

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
    public navProvider: NavProvider,
    public storageProvider: StorageProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstUsePage');
  }

  getStarted() {
    this.storageProvider.save([{ key: EntryName.firstUse, value: false }]).subscribe(() => {
      this.navProvider.setRoot(RouteLinkPageId.welcome);
    });
  }

}
