import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comments;

  constructor(public navCtrl: NavController, private http: Http) {
    http.get('https://morning-beyond-35183.herokuapp.com/comments.json').subscribe(res => this.comments = res.json());
  }

}
