import { Component } from '@angular/core';

interface Tipo {
  value: string;
  viewValue: string;
}
interface Repetir {
  value: string;
  viewValue: string;
}
interface Sonido {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
  
})
export class ConfiguracionComponent {
  tipos: Tipo[] = [
    {value: 'libre-0', viewValue: 'Libre'},
    {value: 'clases-1', viewValue: 'Clases'},
    
  ];
  sonidos: Sonido[] = [
    {value: 'mercurio-0', viewValue: 'Mercurio'},
    {value: 'reflejo-1', viewValue: 'Reflejos'},
    
  ];
  repetidos: Repetir[] = [
    {value: 'todo-0', viewValue: 'Todos los días'},
    {value: 'finde-1', viewValue: 'Fines de semana'},
    
  ];

  hours: string = '';
  minutes: string = '';
  ampm: string = 'AM';
  is12HourClock: boolean = true; // Cambia esta variable según el formato de reloj

  formatHours() {
    if (this.is12HourClock) {
      this.hours = this.hours ? this.hours.padStart(2, '0').slice(-2) : '';
      if (parseInt(this.hours, 10) > 12) this.hours = '12';
    } else {
      this.hours = this.hours ? this.hours.padStart(2, '0').slice(-2) : '';
      if (parseInt(this.hours, 10) > 23) this.hours = '23';
    }
  }

  formatMinutes() {
    this.minutes = this.minutes ? this.minutes.padStart(2, '0').slice(-2) : '';
    if (parseInt(this.minutes, 10) > 59) this.minutes = '59';
  }
  mostrarAlerta() {
    alert('Alarma configurada con éxito');
  }

}
