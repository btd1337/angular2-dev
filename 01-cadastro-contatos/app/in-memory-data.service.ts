import {InMemoryDbService} from "angular-in-memory-web-api";

import {Contato} from "./contatos/contato.model";

export class InMemoryDataService implements InMemoryDbService {
        createDb() {
            let contatos: Contato[] = [
            {id: 1, nome: "Fulano de Tal", email: "fdt@gmail.com", telefone: "32-99111-6585"},
            {id: 2, nome: "Ciclano", email: "ciclano@gmail.com", telefone: "32-98888-4587"},
            {id: 3, nome: "Beltrano", email: "beltrano.btn@gmail.com", telefone: "32-91222-1585"}
        ];
        return {contatos};
    }
}
