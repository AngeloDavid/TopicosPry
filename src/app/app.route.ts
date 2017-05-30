/**
 * Created by angel on 30/05/2017.
 */

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../app/component/home/home.component';
import {CanchasComponent} from '../app/component/canchas/canchas.component';
import {CampeonatosComponent} from '../app/component/campeonatos/campeonatos.component';
import {MisPartidosComponent} from '../app/component/mis-partidos/mis-partidos.component';
import {PerfilComponent} from '../app/component/perfil/perfil.component' ;
import {RetosComponent} from '../app/component/retos/retos.component' ;


const APP_ROUTES: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'canchas' , component: CanchasComponent},
  {path: 'campeonatos' , component: CampeonatosComponent},
  {path: 'mis_partidos' , component: MisPartidosComponent},
  {path: 'mis_partidos/retos' , component: RetosComponent},
  {path: 'perfil' , component: PerfilComponent},
  {path: '**' , pathMatch : 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



