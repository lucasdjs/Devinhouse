export interface Pessoa{
    nome: string;
    idade: number;
    rua: string;


    cadastrar(nome, idade, rua, identificador, setor);

}
