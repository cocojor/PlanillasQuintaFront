import { Rutas } from './../../commos/Rutas';
import { Auditoria } from './../../models/planillaquinta/Auditoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { catchError, tap } from 'rxjs/operators';
// import { Auditoria } from 'src/app/models/capacitaciones/Auditoria';


export class BadgeItem {
    public type: string;
    public value: string;
}

export class ChildrenItems {
    public id?: number;
    public state: string;
    public target?: boolean;
    public name: string;
    public type?: string;
    public children?: ChildrenItems[];
}

export class MainMenuItems {
    public id?: number;
    public state: string;
    public short_label?: string;
    public main_state?: string;
    public target?: boolean;
    public name: string;
    public type: string;
    public icon: string;
    public badge?: BadgeItem[];
    public children?: ChildrenItems[];
    public orden = 0;
    public external: string;
}

export class Menu {
    public id?: number;
    public label: string;
    public main: MainMenuItems[];
}

export class SeguridadMenu extends Auditoria {
    idPermiso?: number;
    idParent?: number;
    tipo: number;
    iconMenu: string;
    descripcion?: string;
    nivel?: number;
    ruta: string;
    hijos: Hijos[] = [];
    subMenu?: string;
    constructor() {
        super();
    }
}
export class Hijos extends Auditoria {
    idPermiso?: number;
    idParent?: number;
    tipo: number;
    iconMenu: string;
    descripcion?: string;
    nivel?: number;
    ruta: string;
    subMenu?: string;
    hijos?: Hijos[] = [];
    orden = 0;
}


// const MENUITEMS = [
//     {
//         label: 'Gitoca',
//         main: [
//             {
//                 main_state: 'admin',
//                 state: 'contratantes',
//                 short_label: 'E',
//                 name: 'Contratantes',
//                 type: 'link',
//                 icon: 'ti-briefcase'
//             },
//             {
//                 main_state: 'admin',
//                 state: 'contratistas',
//                 short_label: 'CO',
//                 name: 'Contratistas',
//                 type: 'link',
//                 icon: 'ti-user'
//             },
//             {
//                 main_state: 'admin',
//                 state: 'instructores',
//                 short_label: 'I',
//                 name: 'Instructores',
//                 type: 'link',
//                 icon: 'ti-id-badge'
//             },
//             {
//                 main_state: 'admin',
//                 state: 'cursos',
//                 short_label: 'CU',
//                 name: 'Cursos',
//                 type: 'link',
//                 icon: 'ti-clipboard',
//             },
//             {
//                 main_state: 'admin',
//                 state: 'matriculas',
//                 short_label: 'M',
//                 name: 'Matriculas',
//                 type: 'link',
//                 icon: 'ti-files'
//             },
//             {
//                 main_state: 'admin',
//                 state: 'pagos',
//                 short_label: 'M',
//                 name: 'Pagos',
//                 type: 'link',
//                 icon: 'ti-money'
//             },
//             {
//                 main_state: 'admin',
//                 state: 'licencias',
//                 short_label: 'L',
//                 name: 'Licencias',
//                 type: 'link',
//                 icon: 'ti-bookmark'
//             },
//             {
//                 main_state: '',
//                 state: 'admin',
//                 short_label: 'M',
//                 name: 'Configuraciones',
//                 type: 'sub',
//                 icon: 'ti-settings',
//                 children: [
//                     {
//                         state: 'configuracion',
//                         target: false,
//                         name: 'Generales',
//                         type: 'link',
//                         icon: 'ti-settings'

//                     },
//                     {
//                         state: 'localidades',
//                         target: false,
//                         name: 'Localidades',
//                         type: 'link',
//                     },
//                     {
//                         state: 'vehiculos',
//                         target: false,
//                         name: 'Vehiculos',
//                         type: 'link',
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         label: 'Las Bambas',
//         main: [
//             {
//                 main_state: 'empresa',
//                 state: 'contratistas',
//                 short_label: 'CO',
//                 name: 'Contratistas',
//                 type: 'link',
//                 icon: 'ti-briefcase'
//             },
//             {
//                 main_state: 'empresa',
//                 state: 'alumnos',
//                 short_label: 'AL',
//                 name: 'Alumnos',
//                 type: 'link',
//                 icon: 'ti-user'
//             }
//         ]
//     },
//     {
//         label: 'Graña y Montero',
//         main: [
//             {
//                 main_state: 'contratista',
//                 state: 'colaboradores',
//                 short_label: 'P',
//                 name: 'Colaboradores',
//                 type: 'link',
//                 icon: 'ti-user'
//             },
//             {
//                 main_state: 'contratista',
//                 state: 'matriculas',
//                 short_label: 'AL',
//                 name: 'Matriculas',
//                 type: 'link',
//                 icon: 'ti-files'
//             }
//         ]
//     },
//     {
//         label: 'Instructor',
//         main: [
//             {
//                 main_state: 'instructor',
//                 state: 'dashboard',
//                 short_label: 'P',
//                 name: 'Dashboard',
//                 type: 'link',
//                 icon: 'ti-home'
//             },
//             {
//                 main_state: 'instructor',
//                 state: 'cursos',
//                 short_label: 'CA',
//                 name: 'Cursos Asignados',
//                 type: 'link',
//                 icon: 'ti-clipboard'
//             },
//             {
//                 main_state: 'instructor',
//                 state: 'perfil',
//                 short_label: 'MP',
//                 name: 'Mi Perfil',
//                 type: 'link',
//                 icon: 'ti-id-badge'
//             }
//         ]
//     },
//     {
//         label: 'Alumno',
//         main: [
//             {
//                 main_state: 'alumno',
//                 state: 'dashboard',
//                 short_label: 'P',
//                 name: 'Dashboard',
//                 type: 'link',
//                 icon: 'ti-home'
//             },
//             {
//                 main_state: 'alumno',
//                 state: 'cursos',
//                 short_label: 'CM',
//                 name: 'Cursos Matriculados',
//                 type: 'link',
//                 icon: 'ti-clipboard'
//             },
//             {
//                 main_state: 'alumno',
//                 state: 'perfil',
//                 short_label: 'MP',
//                 name: 'Mi Perfil',
//                 type: 'link',
//                 icon: 'ti-id-badge'
//             },
//         ]
//     }
// ];

@Injectable({
    providedIn: 'root',
})
export class MenuItems {

    private ruta = new Rutas;
    public datosUsuario;
    public mensajeError: string;

    public nuevoMenu2: Menu[];

    constructor(public _http: HttpClient,
         private seguridadService: SeguridadService
        ) {
         //   this.idEmpresa = this.seguridadService.obtenerIdEmpresa();
    }

    public getMenus(): Observable<any> {
        this.datosUsuario = this.seguridadService.ObtenerIdPayload().scopes;

        let endpoint = this.ruta.RUTA_SERVER_SEGURIDAD + '/usuarios/' + this.datosUsuario.IdUsuario
                                                          + '/permisos';

        if (this.seguridadService.existeRol()) {
            endpoint += '?IdRol=' + this.seguridadService.ObtenerIdRolUsuario();
        }

        return this._http
            .get(endpoint).pipe(
                tap((response: Response) => response),
                catchError(this.handleError),
            );
    }

    public createMenu(_menu: SeguridadMenu[]): Menu[] {
        const menuList = new Array<Menu>();
        _menu.forEach(element => {
            const menu = new Menu();
            const mainMenuItemsList = new Array<MainMenuItems>();
            element.hijos.forEach(hijos => {
                const mainMenuItems = new MainMenuItems();
                const childrenItemsList = new Array<ChildrenItems>();
                let counter = 0;
                hijos.hijos.forEach(_hijos => {
                      const childrenItems = new ChildrenItems;
                      childrenItems.state = _hijos.ruta;
                      childrenItems.name = _hijos.descripcion;
                      childrenItems.id = _hijos.idPermiso;
                      childrenItemsList.push(childrenItems);
                      mainMenuItems.children = childrenItemsList;
                      counter++;
                });
                mainMenuItems.state = hijos.ruta;
                mainMenuItems.name = hijos.descripcion;
                if (counter === 0) {
                    mainMenuItems.type = 'link';
                    mainMenuItems.main_state = element.ruta;
                } else {
                    mainMenuItems.type = 'sub';
                    mainMenuItems.main_state = element.ruta;
                }

                mainMenuItems.icon = hijos.iconMenu;
                mainMenuItems.id = hijos.idPermiso;
                mainMenuItems.orden = hijos.orden;
                mainMenuItemsList.push(mainMenuItems);
                menu.main = mainMenuItemsList;
            });
            menu.label = element.descripcion;
            menu.id = element.idPermiso;
            menuList.push(menu);
        });
        return menuList;
    }

    private handleError(error: Response) {
        const mensaje = `Error status code ${error.status} en ${error.url}`;
        return throwError(mensaje);
    }
}
