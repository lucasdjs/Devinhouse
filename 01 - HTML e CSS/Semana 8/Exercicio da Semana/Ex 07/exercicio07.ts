interface Pessoa{
    nome: string;
    idade: number;
    rua: string;


    cadastrar(nome, idade, rua, identificador, setor);

}

class Aluno implements Pessoa{
    nome: string;
    idade: number;
    rua: string ;

    matricula:number;
    cadeira: string[] = [];
    
    cadastrar(nome, idade, rua, matricula, cadeira) {
        console.log(nome, idade, rua, matricula, cadeira)
    }
    constructor(){
        this.nome ;
        this.idade;
        this.rua;
        this.matricula;
        this.cadeira;
        this.cadastrar;
}
}

let teste = new Aluno()

teste.cadastrar("Lucas", 23, "Jonas viera", 230, ["dausjd", "udjhusadh"])


class Funcionario implements Pessoa{
    nome: string;
    idade: number;
    rua: string;
    
    identificador: number;
    setor:string;


    cadastrar(nome, idade, rua, identificador, setor) {
        console.log(nome, idade, rua, identificador, setor)
    }
    constructor(){
        this.nome;
        this.idade;
        this.rua;
        this.identificador;
        this.setor;
        this.cadastrar;
    }
}

const teste2 = new Funcionario();

teste2.cadastrar("nome", 23, "Jonas vieira", 50, "A");