import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CanchasPage,MiperfilPage,CampeonatosPage,MisRetosPage,MisPartidosPage} from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage,icon:'ios-home' },
      { title: 'Canchas', component: CanchasPage, icon:'ios-football' },
      { title: 'CampeonatosPage', component: CampeonatosPage, icon:'ios-podium' },
      { title: 'Mis partidos', component: MisPartidosPage, icon:'ios-calendar' },
      { title: 'Mis Retos', component: MisRetosPage, icon:'ios-git-compare' },
      { title: 'Mi Perfil', component: MiperfilPage, icon:'ios-contact' },
      { title: 'List', component: ListPage,icon:'' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
