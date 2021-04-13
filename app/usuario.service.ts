import { Injectable } from '@angular/core';
// importaciones hechas por mi
import { Usuario } from './Usuario';
import { USUARIOS } from './mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private messageService: MessageService) { }

  // Metodo get para recoger el mock de usuarios creado anteriormente
  getUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.messageService.add('UsuarioService: usuarios añadidos');
    return usuarios;
  }

  // Método get para recoger un unico usuario atendiendo a alguno de sus parámetros
  getUsuario(id: number) : Observable<Usuario> {
    const usuario = USUARIOS.find(h => h.id === id) as Usuario;
    this.messageService.add('El servicio de usuarios añadió el usuario con id '+id);
    return of(usuario);
  }
}
