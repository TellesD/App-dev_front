import { Camera } from '@ionic-native/camera/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
    
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ImagePicker} from '@ionic-native/image-picker/ngx'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModalPageModule } from './login-modal/login-modal.module';
import { CardModalPageModule } from './card-modal/card-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PayPal } from '@ionic-native/paypal/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    LoginModalPageModule,   
    CardModalPageModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicStorageModule.forRoot()
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    PayPal,
    ImagePicker,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
