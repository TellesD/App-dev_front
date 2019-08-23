import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedLikeComponent } from '../components/animated-like/animated-like.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AnimatedLikeComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AnimatedLikeComponent]
})
export class SharedModule { }
