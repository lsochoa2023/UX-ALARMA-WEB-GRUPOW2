import { Component } from '@angular/core';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent {
  activeComponent: string | null = null; // Estado para el componente activo

  setActiveComponent(component: string) {
    this.activeComponent = this.activeComponent === component ? null : component; // Alternar la visibilidad del componente
  } 
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
}
