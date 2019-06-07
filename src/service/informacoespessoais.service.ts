import firebase from "firebase";
import { InformacoesPessoais } from "../model/informacoespessoais";
import { Injectable } from "@angular/core";

@Injectable()
export class InformacoesPessoaisService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    
    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : InformacoesPessoais[] {
            let listaDeInformacoesPessoais : InformacoesPessoais[] = [];
        var ref = this.firestore.collection("informacoespessoais");

        ref.get().then(query => {
            query.forEach(doc => {
                let i = new InformacoesPessoais();
                i.setDados(doc.data());
                listaDeInformacoesPessoais.push(i);
            });
        });
        return listaDeInformacoesPessoais;
    }
}