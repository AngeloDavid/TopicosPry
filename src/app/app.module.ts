import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {APP_ROUTING} from '../app/app.route';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { CanchasComponent } from './component/canchas/canchas.component';
import { CampeonatosComponent } from './component/campeonatos/campeonatos.component';
import { MisPartidosComponent } from './component/mis-partidos/mis-partidos.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { HomeComponent } from './component/home/home.component';
import { RetosComponent } from './component/retos/retos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CanchasComponent,
    CampeonatosComponent,
    MisPartidosComponent,
    PerfilComponent,
    HomeComponent,
    RetosComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
