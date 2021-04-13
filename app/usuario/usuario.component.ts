import { Component, OnInit } from '@angular/core';

import {Usuario} from '../Usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  selectedUsuario?:Usuario;

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService,) { }

  ngOnInit(): void {
    // Lo primero que hacemos al levantar la aplicación es recoger los usuarios
    this.getUsuarios();
  }

  // Este es el método que se está utilizando en el usuario.component.html para mostrar los detalles del usuario cuando este se selecciona

  // Metodo para recoger los usuarios
  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

}
