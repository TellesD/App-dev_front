import { Component,ViewChild, OnInit } from '@angular/core';
import { NavController, IonContent} from '@ionic/angular';
import { Cardservice } from '../services/cards.service';
import {DayModule} from '../module/day.module';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  dummyList:any;
 
 
  constructor(private navCtrl: NavController, private cardservice: Cardservice) { }
  cards: DayModule[];
  

  ngOnInit() {
   this.getDay();
     
  }
  
  open() {
    this.navCtrl.navigateForward('day');
  }
  ScrollToPoint(X){
    this.content.scrollToPoint(X, screen.availHeight);
  }
  ScrollToTop(){
    this.content.scrollToTop();
  }
  getDay(): void {
    this.cardservice.getDay()
        .subscribe((cards) =>{ this.cards = cards; console.log(cards)} );
      
  }
}
