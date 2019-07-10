export class Cliente {
    id : string;
    nome : String;
    telefone : String;
    email : String;
    cidade : String;
    endereco: string;


setDados(obj : any){
    this.nome = obj.nome;
    this.telefone = obj.telefone;
    this.email = obj.email;
    this.cidade = obj.cidade;
    this.endereco = obj.endereco;
    }
}