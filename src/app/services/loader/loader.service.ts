import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class LoaderService {

  loading: any;

  constructor(
    public loadCtrl: LoadingController,
  ){
  }

  async presentLoading(){
    this.loading = await this.loadCtrl.create({
      message: 'Buscando...',
      spinner: 'bubbles',
      mode: 'ios',
      cssClass:'my-loader'
    });
    await this.loading.present();
  }

  async dismissLoader(){
    this.loading.dismiss();
  }

}
