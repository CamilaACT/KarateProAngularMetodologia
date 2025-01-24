import { Component } from '@angular/core';
import { UtilidadService } from '../../Reutilizable/utilidad.service';
import { Router } from '@angular/router';


interface MenuOption {
  label: string;
  icon: string;
  route: string;
  rolesAllowed: string[]; // Array de roles que pueden ver esta opción
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

    menuOptions: MenuOption[] = [
      { label: 'Usuarios', icon: 'group', route: '/pages/usuarios', rolesAllowed: ['Administrador'] },
      { label: 'Rangos', icon: 'military_tech', route: '/pages/rangos', rolesAllowed: [] },
      { label: 'Clubes', icon: 'groups', route: '/pages/clubes', rolesAllowed: ['Director de clubes'] },
      { label: 'Competencias', icon: 'emoji_events', route: '/pages/competencias', rolesAllowed: [ 'Administrador'] },
      { label: 'Técnicas', icon: 'sports_martial_arts', route: '/pages/tecnicas', rolesAllowed: [] },
      { label: 'Roles', icon: 'admin_panel_settings', route: '/pages/roles', rolesAllowed: [] },
      { label: 'Competidores', icon: 'sports_kabaddi', route: '/pages/competidores', rolesAllowed: [] },
      { label: 'Pelea', icon: 'sports_martial_arts', route: '/pages/peleas', rolesAllowed: ['Administrador', 'Juez de mesa'] },
      { label: 'informeclub', icon: 'sports_martial_arts', route: '/pages/informeclub', rolesAllowed: ['Administrador', 'Juez de mesa','Director de clubes'] },
      { label: 'informeCompetidores', icon: 'sports_martial_arts', route: '/pages/InformeCompetidorListaComponent', rolesAllowed: ['Administrador', 'Juez de mesa','Director de clubes'] },
      { label: 'informeEdades', icon: 'sports_martial_arts', route: '/pages/InformeEdadComponent', rolesAllowed: ['Administrador', 'Juez de mesa','Director de clubes'] },
      { label: 'InformePresentacionComponent', icon: 'sports_martial_arts', route: '/pages/InformePresentacionComponent', rolesAllowed: ['Administrador', 'Juez de mesa','Director de clubes'] },
      
  ];

  filteredMenuOptions: MenuOption[] = [];

  constructor(private utilidadService: UtilidadService, private router: Router) { }


  ngOnInit() {
    const userRole = this.utilidadService.obtenerRolUsuario();
    this.filteredMenuOptions = this.menuOptions.filter(option => option.rolesAllowed.includes(userRole));
}

  logout() {

    this.utilidadService.eliminarSesionUsuario();


    this.router.navigate(['/login']);
  }
}
