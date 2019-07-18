export class Aparelho {
    id : string;
    nomeAparelho : String;
    descricao : String;
    preco : number;


setDados(obj : any){
    this.nomeAparelho = obj.nomeAparelho;
    this.descricao = obj.descricao;
    this.preco = obj.preco;
    }
}