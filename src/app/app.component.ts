import { Component } from '@angular/core';
import {Router} from '@angular/router';
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
      title: 'TREND',
      url: '/day',
      icon: 'home'
    },
   {
      title: 'CATEGORIES',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'FAVORITES',
      url: '/favoritos',
      icon: 'heart'
    },
    {
      title: 'ADD PROJECT',
      url: '/adicionar',
      icon: 'add-circle'
    },
    {
      title: 'DONATE',
      url: '/donate',
      icon: 'add-circle'
    },
    {
      title: 'ABOUT',
      url: '/about',
      icon: 'add-circle'
    },
    {
      title: 'paypal',
      url: '/paypal',
      icon: 'add-circle'
    },
    {
      title: 'LOGOUT',
      url: '/login',
      icon: 'exit'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.navigate(['login']);
      });

    }
  }
