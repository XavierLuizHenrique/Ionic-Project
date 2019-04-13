import firebase from "firebase";
import { Livros } from "../model/livros";
import { Injectable } from "@angular/core";

@Injectable()
export class LivrosService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Livros[] {
            let listaDeLivros : Livros[] = [];
        var ref = this.firestore.collection("livros");

        ref.get().then(query => {
            query.forEach(doc => {
                let l = new Livros();
                l.setDados(doc.data());
                listaDeLivros.push(l);
            });
        });
        return listaDeLivros;
    }
}