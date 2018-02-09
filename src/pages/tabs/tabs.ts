import { Component } from '@angular/core';

import { PasseioPage } from '../passeio/passeio';
import { EsportivoPage } from '../esportivo/esportivo';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PasseioPage;
  tab2Root = EsportivoPage;

  constructor() {

  }
}
