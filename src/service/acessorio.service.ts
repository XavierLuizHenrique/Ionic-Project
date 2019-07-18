import firebase from "firebase";
import { Acessorio } from "../model/acessorio";
import { Injectable } from "@angular/core";

@Injectable()
export class AcessorioService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Acessorio[] {
            let listaDeAcessorios: Acessorio[] = [];
        var ref = this.firestore.collection("acessorio");

        ref.get().then(query => {
            query.forEach(doc => {
                let a = new Acessorio();
                a.setDados(doc.data());
                listaDeAcessorios.push(a);
            });
        });
        return listaDeAcessorios;
    }
}