import { Token } from './../../../models/planillaquinta/token';
import { Roles } from './../../../enums/roles.enum';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Constantes } from 'src/app/enums/constantes.enum';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { EncryptService } from 'src/app/services/encrypt.service';
import swal from 'sweetalert2';
import { Rol } from 'src/app/models/seguridad/Rol';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    return: string;
    badCredentials = false;
    mensajeError: string;
    token: Token;
    public loginForm: FormGroup;

    // RZevallos - 13/02/2020 - Guarda parámetro 'identificador-informe' - MSInspecciones
    private informe: string;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private formBuilder: FormBuilder,
                private seguridadService: SeguridadService,
                private encryptService: EncryptService) {
        localStorage.clear();
        this.loginForm = this.createLoginForm();
    }

    ngOnInit() {
    }

    createLoginForm(): FormGroup {
        return this.formBuilder.group({
            usuario: [Constantes.STRING_VACIO, Validators.required],
            contraseña: [Constantes.STRING_VACIO, Validators.required]
        });
    }

    resetLoginForm() {
        this.loginForm.setValue({
            usuario: [Constantes.STRING_VACIO],
            contraseña: [Constantes.STRING_VACIO]
        });
    }

    public ObtenerCredencial() {
        this.badCredentials = false;
        const xcontraseña = this.encryptService.encriptAll(this.contraseña.value);

        const user64: string = btoa(this.usuario.value + ':' + xcontraseña);
        // console.log(user64);
        this.seguridadService.ObtenerCredencial(user64)
            .subscribe(
                rest => {
                    // console.log('token', this.token.AccessToken);
                    if (rest) {
                        this.GuardarToken(rest);

                        this.seguridadService.obtenerRolesPorToken().subscribe(
                            (instance: Array<Rol>) => {
                                if (instance != null && instance.length > 0) {
                                    // RZevallos - 06/01/2020 - Se agrega soporte para usuarios con múltiples roles
                                    if (instance.length === 1) {
                                        localStorage.setItem('RolUsuario', instance[0].descripcion);
                                        localStorage.setItem('IdRolUsuario', instance[0].id.toString());

                                        switch (instance[0].descripcion) {
                                            case Roles.ADMINISTRADOR:
                                                this.router.navigate(['admin']);
                                                break;
                                            default:
                                                this.router.navigate(['/auth/login']);
                                                break;
                                        }
                                    } else {
                                        this.router.navigate(['/auth/login/roles']);
                                    }
                                } else {
                                    swal('Alerta!', 'El usuario no tiene roles habilitados.', 'warning');
                                }
                            }
                        );

                    } else {
                        this.router.navigate(['/auth/login']);
                        this.resetLoginForm();
                    }
                },
                error => {
                    this.mensajeError = <any>error;
                    this.badCredentials = true;
                }
            );
    }

    private GuardarToken(token: Token) {
        localStorage.setItem('AccesToken', token.accessToken);
        localStorage.setItem('ExpiresInToken', '' + token.expiresIn);
    }

    get usuario(): FormArray {
        return this.loginForm.get('usuario') as FormArray;
    }

    get contraseña(): FormArray {
        return this.loginForm.get('contraseña') as FormArray;
    }
}
