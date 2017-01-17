"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: "Fulano de Tal", email: "fdt@gmail.com", telefone: "32-99111-6585" },
            { id: 2, nome: "Ciclano", email: "ciclano@gmail.com", telefone: "32-98888-4587" },
            { id: 3, nome: "Beltrano", email: "beltrano.btn@gmail.com", telefone: "32-91222-1585" }
        ];
        return { contatos: contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map