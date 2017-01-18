import {CommonModule} from '@angular/common';
import { ContatoBuscaComponent } from "./contato-busca.component";
import {ContatoDetalheComponent}  from './contato-detalhe.component';
import {ContatoRoutingModule} from './contato-rounting.module';
import {ContatoService} from './contato.service';
import {ContatosListaComponent} from './contatos-lista.component';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core'

@NgModule({
    imports:[
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatoBuscaComponent,
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers:[
        ContatoService
    ]
})
export class ContatosModule{

}