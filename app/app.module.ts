import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// imports hechos por mi
import { FormsModule } from '@angular/forms'; // Necesaria la importacion para ngModule, es el dataBinding de la interfaz usuario
import { UsuarioComponent } from './usuario/usuario.component'; // Necesario importar, se importa automaticamente al hacer el dataBinding
import { TableroComponent } from './tablero/tablero.component';

// Fin de imports hechos por mi
import { AppComponent } from './app.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';
import { MessagesComponent } from './messages/messages.component';
import { ApproutingModule } from './approuting.module';

// imports para http requests
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



// HttpClientModule, --> Esto para que cona vale? si esta solo y con una coma

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioDetallesComponent,
    MessagesComponent,
    TableroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
