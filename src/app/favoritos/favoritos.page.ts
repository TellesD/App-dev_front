import { Component, OnInit } from '@angular/core';
import { Cardservice } from '../services/cards.service';
import {CardModule} from '../module/card.module';
import { from } from 'rxjs';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
cards: CardModule[];
  constructor(private cardservice: Cardservice) { }
   
  ngOnInit() {
  } 

  getFavcard(){
    this.cardservice.getFavCards()
      .subscribe((card)=>{this.cards= card})
    
  }

}
