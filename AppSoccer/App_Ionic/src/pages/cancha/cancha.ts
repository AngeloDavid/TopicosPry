/**
 * Created by MAYBETH on 12/7/2017.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CanchasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-cancha',
  templateUrl: 'cancha.html',
})
export class CanchaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanchaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
