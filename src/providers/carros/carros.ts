import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CarrosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosProvider {
  url:any;
  constructor(public http: HttpClient) {
    console.log('Hello CarrosProvider Provider');
    this.url = 'http://54.84.91.49/teste-vitrine/src/listaCarros';
  }
  buscaCarros(){
    return this.http.get(this.url);
  }

}
