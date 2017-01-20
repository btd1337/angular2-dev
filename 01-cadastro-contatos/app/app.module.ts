import "./util/rxjs-extensions";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { ContatosModule } from "./contatos/contatos.module";
import { DialogService } from "./dialog.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { InMemoryDataService } from "./in-memory-data.service";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { NgModule } from "@angular/core";

@NgModule(
    {
        imports: [
            AppRoutingModule,
            BrowserModule,
            ContatosModule,
            FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService)
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent],
        providers: [
            DialogService
        ]
    }
)
export class AppModule {

}
