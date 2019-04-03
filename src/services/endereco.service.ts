import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Endereco } from "../model/endereco";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EnderecoService{
    
    constructor(private http: HttpClient) {
    }
    buscaCEP(cep : string) : Observable<Endereco>{
        return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}