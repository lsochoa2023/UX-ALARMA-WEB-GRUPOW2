import { Component } from '@angular/core';

@Component({
  selector: 'app-compartir',
  templateUrl: './compartir.component.html',
  styleUrls: ['./compartir.component.css']
})
export class CompartirComponent {
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

  selectedDays: Set<string> = new Set();

  toggleSelection(day: string) {
    if (this.selectedDays.has(day)) {
      this.selectedDays.delete(day);
    } else {
      this.selectedDays.add(day);
    }
  }

  isSelected(day: string): boolean {
    return this.selectedDays.has(day);
  }
}
