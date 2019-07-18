import firebase from "firebase";
import { Aparelho } from "../model/aparelho";
import { Injectable } from "@angular/core";

@Injectable()
export class AparelhoService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Aparelho[] {
            let listaDeAparelhos : Aparelho[] = [];
        var ref = this.firestore.collection("aparelho");

        ref.get().then(query => {
            query.forEach(doc => {
                let p = new Aparelho();
                p.setDados(doc.data());
                listaDeAparelhos.push(p);
            });
        });
        return listaDeAparelhos;
    }
}