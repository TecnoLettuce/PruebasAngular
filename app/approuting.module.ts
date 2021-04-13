import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { TableroComponent } from './tablero/tablero.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';

const routes : Routes = [
  { path: '' , redirectTo: '/tablero' , pathMatch: 'full'}, // Esto redirige la entrada a la aplicación directamente al dashboard
  { path: 'usuarios', component: UsuarioComponent}, // El usuarios de aquí da igual si se pone en mayus o no, es el endPoint
  { path: 'tablero', component: TableroComponent },
  { path: 'detalles/:id', component: UsuarioDetallesComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingModule { }
