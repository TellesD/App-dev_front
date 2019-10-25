import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserModule } from '../module/user.module';
import { Cardservice } from 'src/app/services/cards.service';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {
  loginForm: FormGroup;
  user: UserModule= { 
    email: '',
    password:'',
    name: '',
   ocupation: '',
 };
  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder, private cardservice: Cardservice, private navCtrl: NavController) { 
  } 

  ngOnInit() {
  } 
  
  login() {
    this.cardservice.login(this.user)
    .subscribe(() => this.navCtrl.navigateForward ('/donate') && this.closeModal());
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }
}
