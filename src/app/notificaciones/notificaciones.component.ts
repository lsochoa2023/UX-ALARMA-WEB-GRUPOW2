import { Component } from '@angular/core';
interface Tipo {
  value: string;
  viewValue: string;
}interface Estado {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  activeComponent: string | null = null; // Estado para el componente activo

  setActiveComponent(component: string) {
    this.activeComponent = this.activeComponent === component ? null : component; // Alternar la visibilidad del componente
  } 

  tipos: Tipo[] = [
    {value: 'SI-0', viewValue: 'SI'},
    {value: 'NO-1', viewValue: 'NO'},
    
  ];
  estados: Estado[] = [
    {value: 'Ocupado-0', viewValue: 'Ocupado'},
    {value: 'Libre-1', viewValue: 'Libre'},
    
  ];
  mostrarAlerta() {
    alert('Alarma configurada con éxito');
  }
}
