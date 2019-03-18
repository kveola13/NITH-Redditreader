import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  private subreddit: string;

  constructor(public http: HttpClient) {
    this.subreddit = "awww";
  }

  getDataFromReddit(subreddit: string) {
    return new Promise((resolve, reject) => {
      this.http.get("https://www.reddit.com/r/"+ this.subreddit +"/.json")
        .subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        });

    });
  }

}
