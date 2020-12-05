import { Roles } from './../../../enums/roles.enum';
import { Rol } from './../../../models/seguridad/Rol';
import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
    selector: 'app-rol',
    templateUrl: './rol.component.html',
    styleUrls: ['./rol.component.scss']
})
export class RolComponent implements OnInit {
    private idEvaluadora: number;

    public usuario: string;
    public roles: Array<Rol> = [];
    public rolSeleccionado: string;

    constructor(private router: Router,
                private seguridadService: SeguridadService) { }

    ngOnInit() {
        if (!this.seguridadService.existeToken()) {
            this.router.navigate(['/auth/login']);
        } else {
            const scopes = this.seguridadService.ObtenerIdPayload().scopes;

            this.idEvaluadora = scopes.IdEntidadEmpresa;
            this.usuario = scopes.Usuario;
            this.obtenerRoles();
        }
    }

    public obtenerRoles(): void {
        this.seguridadService.obtenerRolesPorToken().subscribe(
            (_roles: Array<Rol>) => {
                this.roles = _roles;
                console.log('roles', this.roles);
            }
        );
    }

    public continuar(): void {
        if (typeof this.rolSeleccionado === 'undefined' || this.rolSeleccionado == null) {
            swal('Alerta!', 'Seleccione un rol para continuar.', 'warning');
            return;
        }

        localStorage.setItem('RolUsuario', this.rolSeleccionado);
        localStorage.setItem('IdRolUsuario', this.roles.find(x => x.descripcion === this.rolSeleccionado).id.toString());

        switch (this.rolSeleccionado) {
            case Roles.ADMINISTRADOR:
                this.router.navigate(['/contratante']);
                break;
            default:
                this.router.navigate(['/auth/login']);
                break;
        }
    }
}
