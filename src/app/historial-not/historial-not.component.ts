import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface DataElement {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}

const ELEMENT_DATA: DataElement[] = [
  { col1: '25/08/2024', col2: '08:30 am', col3: 'L, M, Mi', col4: 'Ir a clase de Inglés' },
  { col1: '05/07/2024', col2: '03:30 pm', col3: 'M, J', col4: 'Estudiar para parcial' },
  { col1: '10/05/2024', col2: '01:00 pm', col3: 'D', col4: 'Almuerzo familiar' },
  { col1: '01/02/2024', col2: '05:00 pm', col3: 'V', col4: 'Cita de Psicología' }
];

@Component({
  selector: 'app-historial-not',
  templateUrl: './historial-not.component.html',
  styleUrls: ['./historial-not.component.css']
})
export class HistorialNotComponent {
  displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4', 'actions'];
  dataSource = ELEMENT_DATA;

  activeComponent: string | null = null; // Estado para el componente activo

  setActiveComponent(component: string) {
    this.activeComponent = this.activeComponent === component ? null : component; // Alternar la visibilidad del componente
  } 
  deleteElement(element: DataElement) {
    const confirmation = confirm('¿Estás seguro de que deseas eliminar: ' + element.col1 + '?');
    if (confirmation) {
      alert('Eliminado: ' + element.col1);
      // Aquí puedes agregar la lógica para eliminar el elemento de la fuente de datos.
    }
  }

}
