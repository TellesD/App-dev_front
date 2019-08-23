import { Component,ViewChild, OnInit } from '@angular/core';
import { NavController, IonContent} from '@ionic/angular';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  dummyList:any;
 
 
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
   
     
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
  
}
