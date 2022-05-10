export class Aluno{
    private nome: string = "Lucas";
    private matricula: number = 1;
    passou: boolean = true;


    aprovado(media: number){
        if(media >= 7 ){
            this.passou = true;
        }else{
            this.passou = false;
        }
        return this.passou;
     }
}

export interface Nota{
    cadeira: string;
    ponto: number;
    aluno: Aluno;
}