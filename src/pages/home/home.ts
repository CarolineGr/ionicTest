import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AccueilPage } from '../accueil/accueil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pseudo: string;
  mdp: string;

  constructor(public navCtrl: NavController) {

  }

  private connexion() {
    //console.log('test bouton connexion');
    //console.log(this.pseudo + " "+ this.mdp);

    this.navCtrl.push(AccueilPage,{
      pseudo: this.pseudo,
      mdp: this.mdp
    });
    
  }

}
