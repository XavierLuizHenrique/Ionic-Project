export class Suplemento {
    id : string;
    nomesuplementos : string;
    preco : number;
    descricao : string;
 
    setDados(obj : any){
     this.nomesuplementos = obj.nomeSuplementos;
     this.preco = obj.preco;
     this.descricao = obj.descricao;
     }
 }