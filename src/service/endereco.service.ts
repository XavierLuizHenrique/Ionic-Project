import firebase from "firebase";
import { Injectable } from "@angular/core";
import { Endereco } from "../model/endereco";

@Injectable()
export class EnderecoService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Endereco[] {
            let listaDeEnderecos : Endereco[] = [];
        var ref = this.firestore.collection("endereco");

        ref.get().then(query => {
            query.forEach(doc => {
                let e = new Endereco();
                e.setDados(doc.data());
                listaDeEnderecos.push(e);
            });
        });
        return listaDeEnderecos;
    }
}