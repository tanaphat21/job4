import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private t: ToastController) {}


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.t.create({
      message: 'หวัดดีจั๊ปปป',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}