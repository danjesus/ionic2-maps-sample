import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MapPage} from './pages/map/map';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}
})

export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = MapPage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
