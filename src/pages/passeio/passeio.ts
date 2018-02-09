import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrosProvider } from '../../providers/carros/carros';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the PasseioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passeio',
  templateUrl: 'passeio.html',
})
export class PasseioPage {
  carros: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public carrosDao: CarrosProvider,
    private storage: Storage
  ) {
    this.carrosDao.buscaCarros().subscribe(dados => {
      this.carros = dados[0].carros;//como por padrão a resposta da api é sempre esses dois não requer estrutura de decisão
      console.log(this.carros);
    });
  }
  sair() {
    this.storage.set('status', 0).then(data =>{
      this.navCtrl.setRoot(LoginPage);
    });
    
  }


}
