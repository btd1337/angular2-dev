import { Component, OnInit } from '@angular/core';

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit() {
        this.contatos = this.termosDaBusca
            .debounceTime(500)
            .switchMap(term => {
                console.log("Fez a busca", term);
                return term ? this.contatoService.search(term) : Observable.of<Contato[]>([]);
            });

            this.contatos.subscribe((contatos: Contato[]) => {
                console.log("retornou do servidor: ", contatos);
            })
     }

    search(termo: string): void{
        this.termosDaBusca.next(termo);
    }
}