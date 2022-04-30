class ClasseTeste{
    nomeAluno: string;
    nota1: number;
    nota2: number;
    media: number;

    constructor(nomeAluno: string, nota1:number, nota2:number){
this.nomeAluno =nomeAluno;
this.nota1 = nota1;
this.nota2 = nota2;
    }
    calcularMedia(){
    this.media = this.nota1 + this.nota2 / 2;

    return console.log(this.media);
    }
}

let classe = new ClasseTeste("Lucas", 10, 6);

classe.calcularMedia;





