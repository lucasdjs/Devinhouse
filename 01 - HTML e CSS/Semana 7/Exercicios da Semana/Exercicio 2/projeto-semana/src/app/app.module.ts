import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'components/header/header.component';
import { FooterComponent } from 'components/footer/footer.component';
import { ContentComponent } from 'components/content/content.component';
import { BebidasComponent } from 'components/bebidas/bebidas.component';
import { RouterModule, Route } from '@angular/router';
import { Router } from '@angular/router';
import { ComidaComponent } from '../../components/comida/comida.component';
import { HomeComponent } from '../../pages/home/home.component';



const ROUTES: Route[] = [
  {
    path: "",
    component:ContentComponent
  }, 
  {
    path: 'bebidas',
    component:BebidasComponent
  },
  {
    path: 'comida',
    component: ComidaComponent
  },
  
  
 
]
@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BebidasComponent,
    ComidaComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
