import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-components';
  aluno ={
    nome: 'Joao da silva',
    idade: 26,
    nota:0
  }
  listaAlunos = [
    {
    nome: 'Joao da silva',
    idade: 26,
    nota:0
  },
    {
    nome: 'Lucas de Jesus',
    idade: 23,
    nota:10
  },
    {
    nome: 'Kassia Souza',
    idade: 21,
    nota:10
  }
  ]
}
