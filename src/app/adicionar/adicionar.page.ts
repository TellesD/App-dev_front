import { NavController } from '@ionic/angular';

import { Component, OnInit, Input } from '@angular/core';
import { CardModule } from '../module/card.module';
import {Camera} from '@ionic-native/camera/ngx';
import { Cardservice } from '../services/cards.service';
import { TagModule } from '../module/style.module';
import { MaterialModule } from '../module/material.module';
import { ImagePicker } from '@ionic-native/image-picker/ngx';



@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})

export class AdicionarPage implements OnInit {
  imageResponse: any;
  plansResponse: any;

  options: any;
  tags: TagModule[];
  materials: MaterialModule[];
  
  cardsp: CardModule = {
    picture: this.imageResponse,
    photographer: '',
    description: '',
    size: '',
    arch: '',
    year: '',
    providers: '',
    style: '',
    subjects: '',
    like:  '0',
    id: '',

};

  constructor(private navCtrl: NavController, private camera: Camera,  private cardService: Cardservice, private imagePckr: ImagePicker) {
    
   

  }
  
  
  ngOnInit() {
    this.getTags(); 
    this.getMaterials();
  }

  open(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
  
  getTags(): void {
    this.cardService.getTags()
        .subscribe(tags => this.tags = tags);
  }
  getMaterials(): void {
    this.cardService.getMaterials()
        .subscribe(materials => this.materials = materials );
  }


  add(): void {
    console.log(this.cardsp);
    this.cardService.addCard(this.cardsp)
  .subscribe(() => this.navCtrl.back()); }

  
  getImages() {
    
    this.options = {
  
      maximumImagesCount: 3,
 
      
      width: 1024,
      height: 1366,
 
      // quality of resized image, defaults to 100
      quality: 100,
 
      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePckr.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  getPlans() {
    
    this.options = {
  
      maximumImagesCount: 3,
 
      
      width: 1024,
      height: 1366,
 
      // quality of resized image, defaults to 100
      quality: 100,
 
      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.plansResponse = [];
    this.imagePckr.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.plansResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }
}
 



  
  
