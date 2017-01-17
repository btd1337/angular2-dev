import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";
import {Contato} from "./contato.model";
import {CONTATOS} from "./contatos-mock";

@Injectable()
export class ContatoService {
    private contatosUrl: string = "app/contatos";
    constructor(
      private http: Http
    ) {}
    getContatos(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }

    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
        .then(() => {
            console.log("Primeiro then");
            return "Curso Angular";
        })
        .then((param: string) => {
            console.log("Segundo then");
            console.log(param);
        })
        .then(() => {
            console.log("terceiro then");
            return this.getContatos();
        });
    }
}
