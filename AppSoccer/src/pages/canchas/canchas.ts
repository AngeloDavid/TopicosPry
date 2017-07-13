import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {CanchaPage} from "../cancha/cancha";

/**
 * Generated class for the CanchasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-canchas',
  templateUrl: 'canchas.html',
})
export class CanchasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanchasPage');
  }

  presentModal() {
    let modal = this.modalCtrl.create(CanchaPage);
    modal.present();
  }

}
