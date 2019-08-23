import { Component, OnInit} from '@angular/core';
import { CardModule } from '../module/card.module';
import { NavController } from '@ionic/angular';
import { Cardservice } from '../services/cards.service';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cards: CardModule[];
  

  constructor( private navCtrl: NavController, private cardService: Cardservice) {}
  ngOnInit() {
    this.getCards();
    
  }
  getCards(): void {
    this.cardService.getCards()
        .subscribe((cards) =>{ this.cards = cards; console.log(cards)} );
      
  }
  like(id:string){
    this.cardService.putLikes(id) .subscribe();

    }

  open(pagina:string) {
    this.navCtrl.navigateForward(pagina);
  }
}

