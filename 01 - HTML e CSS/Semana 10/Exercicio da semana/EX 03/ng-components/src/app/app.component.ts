import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-components';
  arrayList:string[] =["Harry Potter", "Barbie","Capitão America", "Legalmente loira", "Uma noite no museu"];

}
