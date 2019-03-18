import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any[] = [];
  loading: boolean;
  subreddit: string;

  constructor(private navCtrl: NavController, private dataProvider: DataProvider) {

  }
  ionViewDidLoad() {
    this.getData(this.subreddit);
  }

  goToDetailPage(post: any) {
    this.navCtrl.push('DetailPage', {
      post
    });
  }

  getData(subreddit) {
    this.loading = true;
    this.dataProvider.getDataFromReddit(subreddit)
      .then((response: any) => {
        this.loading = false;
        this.posts = response.data.children;
      })
      .catch(error => {
        console.log(error);
      });
  }

}
