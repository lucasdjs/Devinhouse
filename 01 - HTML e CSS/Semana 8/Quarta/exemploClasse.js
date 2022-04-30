var ClasseTeste = /** @class */ (function () {
    function ClasseTeste(nomeAluno, nota1, nota2) {
        this.nomeAluno = nomeAluno;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    ClasseTeste.prototype.calcularMedia = function () {
        this.media = this.nota1 + this.nota2 / 2;
        return console.log(this.media);
    };
    return ClasseTeste;
}());
var classe = new ClasseTeste("Lucas", 10, 6);
classe.calcularMedia;
