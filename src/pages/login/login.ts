import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  senha:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public logindao: LoginProvider,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {
    this.storage.get('status').then((val) => {
      if(val == 1){
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }

  logar(){
    if(this.email == '' && this.senha == ''){
      let alert = this.alertCtrl.create({
        title: 'LOGIN',
        subTitle: "Você precisa digitar algo",
        buttons: ['OK']
      });
    }else{
    
    this.logindao.login(this.email, this.senha).subscribe(retorno =>{
      console.log(retorno);
     if(retorno.status == "erro"){
        let alert = this.alertCtrl.create({
          title: 'LOGIN',
          subTitle: "Usuário ou senha Incorretos",
          buttons: ['OK']
        });
        alert.present();
      }else{
        this.storage.set('status', 1);
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }
  }

}
