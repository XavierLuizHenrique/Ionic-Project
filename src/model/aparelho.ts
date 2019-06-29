export class Aparelho {
    id : string;
    nomeAparelho : String;
    descricao : String;
    preco : String;


setDados(obj : any){
    this.nomeAparelho = obj.nome;
    this.descricao = obj.descricao;
    this.preco = obj.preco;
    }
}