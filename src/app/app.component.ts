import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  navCtrl: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen,
        public firebaseauth : AngularFireAuth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Informações Pessoais', component: 'InformacoesPessoaisPage',icon: 'person' },
      { title: 'Treinamento', component: 'TreinoPage',icon: "body"},
      { title: 'Alimentação', component: 'AlimentacaoPage',icon: "nutrition"},
      { title: 'Loja', component: 'LojaPage',icon: 'cart'},
      { title: 'Sair', component: 'LogoffPage',icon: 'walk'},
      { title: 'Configurações', component: 'ConfiguracoesPage',icon: 'settings'}, 
      { title: 'Ajuda', component: 'AjudaPage',icon: 'hand'},
    ];
      

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.firebaseauth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = 'InicioPage'; //Página inicial quando estiver logado
          } else {
            this.rootPage = 'HomePage'; // se não houver usuário
           }
      },
      () => {
        this.rootPage = 'InicioPage';
      }
    );
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  irParaInicio(){
    this.navCtrl.push('InicioPage');
  }
}
