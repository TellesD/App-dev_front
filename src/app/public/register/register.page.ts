import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserModule } from '../../module/user.module';
import { Cardservice } from 'src/app/services/cards.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   user: UserModule= { 
       email: '',
       password:'',
       name: '',
      ocupation: '',
      telephone:''
    };
  

  constructor(private navCtrl: NavController, private cardService: Cardservice) { }

  ngOnInit() {
  }
  open(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
  add()
  {
   this.cardService.addUser(this.user)
  .subscribe(() => this.navCtrl.back());
  }
  
}

