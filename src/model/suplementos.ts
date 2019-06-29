export class suplementos {
    id : string;
    nomesuplementos : string;
    preco : number;
    categoria : string;
    descricao : string;
 
    setDados(obj : any){
     this.nomesuplementos = obj.nomeSuplementos;
     this.preco = obj.preco;
     this.categoria = obj.categoria;
     this.descricao = obj.descricao;
     }
 }