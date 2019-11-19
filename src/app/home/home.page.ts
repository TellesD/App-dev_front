import { Component, OnInit} from '@angular/core';
import { CardModule } from '../module/card.module';
import { NavController, ModalController } from '@ionic/angular';
import { Cardservice } from '../services/cards.service';
import { CardModalPage } from '../card-modal/card-modal.page';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cards: CardModule[];
//  dataReturned;

  constructor( private navCtrl: NavController, private cardService: Cardservice, private modalctrl: ModalController) {}
  ngOnInit() {
    this.getCards();
    
  }
  
  getCards(){
     this.cardService.getCards().then((cards) =>{ this.cards = cards; console.log(cards)} );
  
  }
 like(id:string){
     this.cardService.putLikes(id) 
    }

  open(pagina:string) {
    this.navCtrl.navigateForward(pagina);
  }
  
  /*async openModal() {
    const modal = await this.modalctrl.create({
      component: CardModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });*/
 
 /*   modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
 
    return await modal.present();
  }*/
}

