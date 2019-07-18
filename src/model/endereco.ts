export class Endereco {
    id : string;
    rg : number;
    cpf: number;
    email: string;
    telefone: number;
    cep: number;
    cidade : String;
    rua : String;
    pr: string;
    pagamento: string;

setDados(obj : any){
    this.rg = obj.rg;
    this.cpf = obj.cpf;
    this.email = obj.email;
    this.telefone = obj.telefone;
    this.cep = obj.cep;
    this.cidade = obj.cidade;
    this.rua = obj.rua;
    this.pr = obj.pr;
    this.pagamento = obj.pagamento;
    }
}