import {Component , OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import {Contato} from "./contato.model";
import {ContatoService} from "./contato.service";


@Component({
    moduleId: module.id,
    selector: "contato-detalhe",
    templateUrl: "contato-detalhe.component.html"
})

export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            "form-group": true,
            "has-danger": !isValid && !isPristine,
            "has-success": isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            "form-control": true,
            "has-danger": !isValid && !isPristine,
            "has-success": isValid && !isPristine
        };
    }

    ngOnInit(): void {
        console.log("on init");
        this.contato = new Contato(0, "", "", "");
        this.route.params.forEach((params: Params) => {
            let id: number = +params["id"];    // + converter para número
            console.log(id);

            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                });
            }
        });
    }

    onSubmit(): void {
        let promise;
        if (this.isNew) {
            console.log("Cadastrar Contato");
            promise = this.contatoService.create(this.contato)
        }else {
            console.log("Alterar Contato");
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}
