import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Noticias } from "../model/noticias";
import { Observable } from "rxjs/Observable";

@Injectable()
export class noticiaService{
    constructor(private http: HttpClient){
    }
    listaDeNoticias() : Observable <Noticias[]>{
        return this.http.get<Noticias[]>('http://www.mocky.io/v2/5ca284633300009800d34040');
    }
}