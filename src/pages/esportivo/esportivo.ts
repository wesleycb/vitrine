import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrosProvider } from '../../providers/carros/carros';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

/**
 * Generated class for the EsportivoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esportivo',
  templateUrl: 'esportivo.html',
})
export class EsportivoPage {
  carros: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public carrosDao: CarrosProvider,
    private storage: Storage
  ) {
    this.carrosDao.buscaCarros().subscribe(dados => {
      this.carros = dados[1].carros;//como por padrão a resposta da api é sempre esses dois não requer estrutura de decisão
      console.log(this.carros);
    });
  }
  sair() {
    this.storage.set('status', 0).then(data =>{
      this.navCtrl.setRoot(LoginPage);
    });
  }


}
