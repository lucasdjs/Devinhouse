import { Component, OnInit } from '@angular/core';
import {Aluno, Nota} from 'src/assets/exercicio10'

@Component({
  selector: 'EXE-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Aluno{
  title = 'ng-exercicio';
media: number =0;



ngOnInit(){
  let aluno1: Aluno = new Aluno();

      let notas: Nota[] = [
          {
              cadeira: "Geografia",
              ponto: 4,
              aluno: aluno1
          },
          {
              cadeira: "Geografia",
              ponto: 8,
              aluno: aluno1
          },
          {
              cadeira: "Geografia",
              ponto: 6,
              aluno: aluno1
          },
          {
              cadeira: "Geografia",
              ponto: 10,
              aluno: aluno1
          }
      ]

      let soma:number = 0;
  

  notas.forEach(contador => {
soma = soma +contador.ponto
  });


this.media = soma /4;
this.passou = this.aprovado(this.media);
    

}

}


