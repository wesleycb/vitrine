import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasseioPage } from './passeio';

@NgModule({
  declarations: [
    PasseioPage,
  ],
  imports: [
    IonicPageModule.forChild(PasseioPage),
  ],
})
export class PasseioPageModule {}
