import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { UserModule } from '../module/user.module';
import { Cardservice } from 'src/app/services/cards.service';
import { Storage } from '@ionic/storage';
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
   _id:''
 };
  constructor(private storage: Storage,private modalCtrl: ModalController, private cardservice: Cardservice, private navCtrl: NavController) { 
  } 

  ngOnInit() {
  } 
  
 async login() {
   try{
   await this.cardservice.login(this.user).subscribe((x)=>{
     this.storage.set('id', x._id);
   });
   
    
       await this.navCtrl.navigateForward ('/donate')  
    await this.closeModal()}
    
    catch{

    }
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalCtrl.dismiss(onClosedData);
  }
}
