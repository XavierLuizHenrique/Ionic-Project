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
      { title: 'Inicio', component: 'InicioPage',icon: 'home'},
      { title: 'Treinamento', component: 'TreinoPage',icon: "body"},
      { title: 'Alimentação', component: 'AlimentacaoPage',icon: "nutrition"},
      { title: 'Frases Motivacionais', component: 'MotivacaoPage',icon: "book"},
      { title: 'Cadastrar Cliente', component: 'NovoClientePage',icon: "person"},
      { title: 'Lista de Clientes', component: 'ClienteListaPage',icon: "contacts"},
      { title: 'Cadastrar Acessório', component: 'NovoAcessorioPage',icon: "clipboard"},
      { title: 'Cadastrar Suplemento', component: 'NovoSuplementoPage',icon: "clipboard"},
      { title: 'Cadastrar Aparelho', component: 'AparelhoCadastroPage',icon: "clipboard"},
      { title: 'Loja', component: 'AparelhoListaPage',icon: 'cart'},
      { title: 'Sair', component: 'LogoffPage',icon: 'walk'},
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
