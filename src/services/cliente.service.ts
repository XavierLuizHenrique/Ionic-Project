import { cliente } from "../model/cliente";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClientService{
    constructor(private http: HttpClient){
    }
    listaDeClientes() : Observable <cliente[]>{
        return this.http.get<cliente[]>('http://www.mocky.io/v2/5c9c0f183600004b49d96ef8');
    }
}