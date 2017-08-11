import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})
export class AccueilPage {

  pseudo: string;
  mdp: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pseudo = navParams.get("pseudo");
    this.mdp = navParams.get("mdp");

    //console.log(this.pseudo + ' ' + this.mdp);
  }

}
