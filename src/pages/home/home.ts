import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../../pages/first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  clicked() {
    console.log('Button is clicked');
  }

  gotofirst() {
    this.navCtrl.push(FirstPage);
  }
}