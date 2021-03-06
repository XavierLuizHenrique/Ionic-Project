import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { firebaseConfig } from '../config/firebase.config';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFireStorage } from '@angular/fire/storage';
import { StorageService } from '../service/storage.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    // Configuração do Servidor  arquivo de referência ->(firebase.config.ts)
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,  //Serviço de autenticação (Authentication)
    AngularFireStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageService
  ]
})
export class AppModule {}
