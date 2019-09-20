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
   telephone:''
 };
  constructor(private modalCtrl: ModalController, public formBuilder: FormBuilder, private cardservice: Cardservice, private navCtrl: NavController) { 
    this.loginForm = this.formBuilder.group({
      email    : ["test", Validators.compose([Validators.required])],
      password : ["test", Validators.compose([Validators.required])]
    })
  } 

  ngOnInit() {
  } 
  
  login() {
    this.cardservice.login(this.user)
    .subscribe(() => this.modalCtrl.dismiss());

    
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }
}
