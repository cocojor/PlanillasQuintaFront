import { catchError, tap } from 'rxjs/operators';
import { PayLoadToken, Token } from './../models/planillaquinta/token';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Rutas } from './../commos/Rutas';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  private rutas = new Rutas;

  private httpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  });

  constructor(private http: HttpClient, private router: Router) {
  }

  ObtenerIdRolUsuario() {
    return localStorage.getItem('IdRolUsuario');
  }

  existeRol(): boolean {
    if (localStorage.getItem('RolUsuario')) {
        return true;
    }
    return false;
  }
  ObtenerIdPayload() {
    const payLoad: PayLoadToken = decode(localStorage.getItem('AccesToken'));
    payLoad.scopes.RolUsuario = localStorage.getItem('RolUsuario');
    return payLoad;
  }

  ObtnerCredencial(credencial: string ): Observable<any> {
    localStorage.clear();
    const header: HttpHeaders = new HttpHeaders({ 'Authorization': 'Basic ' + credencial });
    const endpoint = this.rutas.RUTA_SERVER_SEGURIDAD + '/login?credentials=' + credencial;

    return this.http.post(endpoint, {} , { headers: header}).pipe(
      tap((response: Response) => <any>response as Token ),
      catchError(this.handleError)
    );
  }

  public obtenerRolesPorToken(): Observable<any> {
    const endpoint = this.rutas.RUTA_SERVER_SEGURIDAD + '/usuarios/roles';
    return this.http.get(endpoint, {headers: this.httpHeaders});
  }
  ObtenerToken() {
    return localStorage.getItem('AccesToken');
  }

  private handleError(error: Response) {
    const mensaje = `Error status code ${error.status} en ${error.url}`;
    return throwError(mensaje);
  }
}
