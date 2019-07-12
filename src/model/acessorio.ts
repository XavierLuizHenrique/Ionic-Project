export class Acessorio {
    id : string;
    nomeAcessorio : String;
    descricao : String;
    preco : String;


setDados(obj : any){
    this.nomeAcessorio = obj.nomeAcessorio;
    this.descricao = obj.descricao;
    this.preco = obj.preco;
    }
}