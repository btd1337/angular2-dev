import "rxjs/add/operator/toPromise";

import {Headers, Http, Response} from "@angular/http";

import {CONTATOS} from "./contatos-mock";
import {Contato} from "./contato.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ContatoService {
    private contatosUrl: string = "app/contatos";
    private headers = new Headers({"Content-Type": "application/json"})
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

    create(contato: Contato): Promise<Contato> {
        return this.http
        .post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers}) 
        .toPromise()
        .then((response: Response) => response.json().data as Contato)
        .catch(this.handleError)

    }

    update( contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http.put(url, JSON.stringify(contato), {headers: this.headers}) 
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError)

    }

    delete( contato: Contato): Promise<Contato> {
        const url= `${this.contatosUrl}/${contato.id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
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
