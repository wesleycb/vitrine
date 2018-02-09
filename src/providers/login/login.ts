import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {
  url:any;
  dados:any;
  constructor(public http: HttpClient) {
    this.url = 'http://54.84.91.49/teste-vitrine/src/login';
    this.dados = {};
    this.dados.em = '';
    this.dados.pa = '';
  }
  login(emails:any,senha:any):any{
    let envio:any;
    this.dados.em = emails;
    this.dados.pa = senha;
    envio = JSON.stringify({email: this.dados.em, password: this.dados.pa});
    return this.http.post(this.url, envio);
  }
}


