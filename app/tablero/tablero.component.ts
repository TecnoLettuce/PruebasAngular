import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios;
  }

  // Metodo para pasarle los usuarios al html
  getUsuarios() : void {
    this.usuarioService.getUsuarios().subscribe( usuarios => usuarios.slice(1,5));
  }

}
