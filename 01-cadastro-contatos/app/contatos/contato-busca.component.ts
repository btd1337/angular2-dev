import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit, OnChanges {

    @Input() busca: string;
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService
    ) { }

    ngOnInit() {
        this.contatos = this.termosDaBusca
            .debounceTime(500)  //aguarde por 300ms para emitir novos eventos
            .distinctUntilChanged() //ignore se o próximo termo de busca for igual ao anterior
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            })
     }

     ngOnChanges(changes: SimpleChanges) {
        let busca: SimpleChange = changes["busca"];
        this.search(busca.currentValue);
     }

    search(termo: string): void{
        this.termosDaBusca.next(termo);
    }
}