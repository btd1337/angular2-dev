export class Contato {

    id: number;
    nome: string;
    email: string;
    telefone: string;

    constructor( _id: number, _nome: string, _email: string, _telefone: string) {
      this.id = _id;
      this.nome = _nome;
      this.email = _email;
      this.telefone = _telefone;
    }
}
