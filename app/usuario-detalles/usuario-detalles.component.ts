import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';



@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuario(id).subscribe(usuario => this.usuario = usuario);
  }

  // Método para el botón de volver atrás
  goBack(): void {
    this.location.back();
  }

}
