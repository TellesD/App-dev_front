import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import {LoginModalPage} from '../../login-modal/login-modal.page'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
dataReturned: any;

constructor( private navCtrl: NavController, private modalctrl: ModalController) { }

  ngOnInit() {
  }
  open(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
  async openModal() {
    const modal = await this.modalctrl.create({
      component: LoginModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }
}
 
