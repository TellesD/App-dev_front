import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  constructor(private storage: Storage ) { }

  ngOnInit() {
    this.storage.get('id').then((val) => {
      console.log('Your age is', val);
    });
  }



}
