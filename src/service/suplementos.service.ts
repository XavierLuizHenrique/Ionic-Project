import firebase from "firebase";
import { Suplemento } from "../model/suplementos";
import { Injectable } from "@angular/core";

@Injectable()
export class SuplementosService {

    firestore = firebase.firestore();
    settings = { timestampsInSnapshots: true};
    

    constructor(){
        this.firestore.settings(this.settings);
    }

    getList() : Suplemento[] {
            let listaSuplementos : Suplemento[] = [];
        var ref = this.firestore.collection("suplementos");

        ref.get().then(query => {
            query.forEach(doc => {
                let s = new Suplemento();
                s.setDados(doc.data());
                listaSuplementos.push(s);
            });
        });
        return listaSuplementos;
    }
}
