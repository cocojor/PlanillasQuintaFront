import { Roles } from './../../../enums/roles.enum';
import { Rol } from './../../../models/seguridad/rol';
import { EncryptService } from './../../../services/encrypt.service';
import { SeguridadService } from './../../../services/seguridad.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from '../../../enums/constantes.enum';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  return: string;
  badCredentials = false;
  mensajeError: string;
  public loginForm: FormGroup;

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
    this.seguridadService.ObtnerCredencial(user64).subscribe(
      (res) => {
        if (res) {
          this.GuardarToken(res);

          this.seguridadService.obtenerRolesPorToken().subscribe(
            (ins: Array<Rol>) => {
              if (ins && ins.length > 0) {
                if (ins.length === 1) {
                  localStorage.setItem('RolUsuario', ins[0].descripcion);
                  localStorage.setItem('IdRolUsuario', ins[0].id.toString());
                  switch (ins[0].descripcion) {
                    case Roles.ADMINISTRADOR:
                      this.router.navigate(['admin']);
                      break;
                    default:
                      this.router.navigate(['auth/login']);
                      break;
                  }
                } else {
                  this.router.navigate(['/auth/login/roles']);
                }
              } else {
                swal.fire('Alerta!', 'Elm usuario no tiene roles habilitados', 'warning');
              }
            }
          );

        }
      },
      error => {
        this.mensajeError = <any>error;
        this.badCredentials = true;
      }
    );
  }

  private GuardarToken(token: any) {
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
