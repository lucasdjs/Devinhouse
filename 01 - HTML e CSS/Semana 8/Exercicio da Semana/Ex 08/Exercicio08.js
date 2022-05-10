"use strict";
exports.__esModule = true;
var Aluno = /** @class */ (function () {
    function Aluno() {
        this.cadeira = [];
        this.nome;
        this.idade;
        this.rua;
        this.matricula;
        this.cadeira;
        this.cadastrar;
    }
    Aluno.prototype.cadastrar = function (nome, idade, rua, matricula, cadeira) {
        console.log(nome, idade, rua, matricula, cadeira);
    };
    return Aluno;
}());
var teste = new Aluno();
teste.cadastrar("Lucas", 23, "Jonas viera", 230, ["dausjd", "udjhusadh"]);
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.nome;
        this.idade;
        this.rua;
        this.identificador;
        this.setor;
        this.cadastrar;
    }
    Funcionario.prototype.cadastrar = function (nome, idade, rua, identificador, setor) {
        console.log(nome, idade, rua, identificador, setor);
    };
    return Funcionario;
}());
var teste2 = new Funcionario();
teste2.cadastrar("nome", 23, "Jonas vieira", 50, "A");
