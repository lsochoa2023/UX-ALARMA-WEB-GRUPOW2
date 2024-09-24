import { Component, OnInit } from '@angular/core';
import * as $ from  'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent  {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {    
    return this.router.url !== '/login';
  }

  logout() {    
    this.router.navigate(['/']); // Redirige al componente de inicio (login)
  }
  
  activeComponent: string | null = null; // Estado para el componente activo

  setActiveComponent(component: string) {
    this.activeComponent = this.activeComponent === component ? null : component; // Alternar la visibilidad del componente
  }   
  
}
