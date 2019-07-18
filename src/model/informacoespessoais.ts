export class InformacoesPessoais {
    id : string;
    nomePessoal : String;
    idade : number;
    altura : number;
    peso : number;
    telefone : number;
    email : String;
    
setDados(obj : any){
    this.nomePessoal = obj.nomePessoal;
    this.idade = obj.idade;
    this.altura = obj.altura;
    this.peso = obj.peso;
    this.telefone = obj.telefone;
    this.email = obj.email;    
    }
}