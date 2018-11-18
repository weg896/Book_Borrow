import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Post a Share',
      url: '/postAShare',
      icon: 'paper-plane'
    },
    {
      title: 'Create a Request',
      url: '/createARequest',
      icon: 'create'
    },
    {
      title: 'Avaliable for Borrow',
      url: '/availableForBorrow',
      icon: 'book'
    },
    {
      title: 'User Profile',
      url: '/userProfile',
      icon: 'person'
    },
    {
      title: 'About App',
      url: '/aboutApp',
      icon: 'information'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
