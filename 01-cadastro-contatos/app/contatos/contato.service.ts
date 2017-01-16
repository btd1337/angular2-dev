import {Injectable} from '@angular/core';
import {Contato} from './contato.model';
import {CONTATOS} from './contatos-mock';

@Injectable()
export class ContatoService{
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
    }

    getContatosSlowly() : Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000);
        })
        .then(() => {
            console.log("Primeiro then");
            return "Curso Angular";
        })
        .then((param : string) => {
            console.log("Segundo then");
            console.log(param);
        })
        .then(() => {
            console.log("terceiro then");
            return this.getContatos()
        });
    }
}