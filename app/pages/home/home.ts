import {Page} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  twentyNumbers: Array<number>;
  constructor() {

    this.twentyNumbers = [];

    for (let i = 0; i < 50; i++) {
      this.twentyNumbers.push(i + 1);
    }

  }

  doRefresh(refresher) {
    console.log('Doing Refresh', refresher);
    setTimeout(function() {
      // stop refresheer
      console.log('Complete.');
      refresher.complete();
    }, 2000);
  }
}
