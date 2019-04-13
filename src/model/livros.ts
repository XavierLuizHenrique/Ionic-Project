export class Livros {
    id : string;
    titulo : string;
    autor : string;
    preco : number;
    resumo : string;
 
    setDados(obj : any){
     this.titulo = obj.titulo;
     this.autor = obj.autor;
     this.preco = obj.preco;
     this.resumo = obj.resumo;
    }
 }