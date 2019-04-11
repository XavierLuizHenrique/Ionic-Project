import firebase from "firebase";
import { Produto } from "../model/produto";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Produto[] {
            let listaDeProdutos : Produto[] = [];
        var ref = this.firestore.collection("produto");

        ref.get().then(query => {
            query.forEach(doc => {
                let p = new Produto();
                p.setDados(doc.data());
                listaDeProdutos.push(p);
            });
        });
        return listaDeProdutos;
    }
}