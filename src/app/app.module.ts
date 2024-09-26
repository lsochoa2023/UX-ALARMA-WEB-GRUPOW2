import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HistorialNotComponent } from './historial-not/historial-not.component';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CompartirComponent } from './compartir/compartir.component';
import { PendienteComponent } from './pendiente/pendiente.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent,
    HistorialNotComponent,
    LoginComponent,
    NotificacionesComponent,
    CompartirComponent,
    PendienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
