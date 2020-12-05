import { Token, PayLoadToken, Scopes } from './../models/planillaquinta/token';
import { Injectable } from '@angular/core';
import { Rutas } from '../commons/Rutas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as decode from 'jwt-decode';

import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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


    public ObtenerIdRolUsuario() {
        return localStorage.getItem('IdRolUsuario');
    }

    public existeRol(): boolean {
        if (localStorage.getItem('RolUsuario')) {
            return true;
        }
        return false;
    }

    public ObtenerIdPayload() {
        const payLoad = new PayLoadToken();
        const datos =  decode.default(localStorage.getItem('AccesToken'));
        payLoad.scopes = new Scopes();
        payLoad.scopes.RolUsuario = localStorage.getItem('RolUsuario');
        payLoad.scopes.IdUsuario = datos['nameid'];
        payLoad.scopes.Usuario = datos['unique_name'];
        return payLoad;
    }

    public ObtenerCredencial(credencial: string): Observable<any> {
        localStorage.clear();
        const header: HttpHeaders = new HttpHeaders({ 'Authorization': 'Basic ' + credencial });
        const endpoint = this.rutas.RUTA_SERVER_SEGURIDAD + '/login?credentials=' + credencial;

        return this.http.post(endpoint, {}, { headers: header }).pipe(
            tap((response: Response) => <any>response as Token),
            catchError(this.handleError)
        );
    }

    public obtenerRolesPorToken(): Observable<any> {
        const endpoint = this.rutas.RUTA_SERVER_SEGURIDAD + '/usuarios/roles';
        return this.http.get(endpoint, { headers: this.httpHeaders });
    }

    public ObtenerToken() {
        return localStorage.getItem('AccesToken');
    }

    private handleError(error: Response) {
        const mensaje = `Error status code ${error.status} en ${error.url}`;
        return throwError(mensaje);
    }

    public logOut() {
        localStorage.removeItem('AccesToken');
        localStorage.removeItem('ExpiresInToken');
        localStorage.removeItem('TipoToken');
        localStorage.removeItem('RolUsuario');
        localStorage.removeItem('IdentificadorInforme');
        localStorage.clear();
        localStorage.removeItem('AccesToken');
        localStorage.removeItem('ExpiresInToken');
        localStorage.removeItem('TipoToken');
        localStorage.removeItem('RolUsuario');
        localStorage.removeItem('IdentificadorInforme');
        localStorage.clear();

        localStorage.setItem('LogOut', Date.now().toString());
        this.router.navigate(['/auth/login']);
    }

    public existeToken(): boolean {
        const token = this.ObtenerToken();
        if (token != null) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (this.getDateLogIn() === 0) {
                return false;
            } else {
                return (payload.exp) * 1000 > Date.now();
            }
        } else {
            return false;
        }
    }

    public getDateLogIn(): number {
        const login = localStorage.getItem('LogIn');
        if (login != null) {
            const numberdate = JSON.parse(login);
            const daylog = new Date(numberdate);
            const daycurrent = new Date();
            if (daycurrent.getDate() === daylog.getDate() &&
                daycurrent.getMonth() === daylog.getMonth() && daycurrent.getFullYear() === daylog.getFullYear()) {
                return numberdate;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
}
