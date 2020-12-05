import { Injectable } from '@angular/core';

@Injectable()
export class Urls {

    /* URL LOGIN */
    URL_LOGIN = '/auth/login';
    URL_FORGOT = '/auth/forgot';
    URL_ADMIN = '/admin';
    URL_ALUMNO = '/alumno';
    URL_CONTRATISTA = '/contratista';
    URL_EMPRESA = '/empresa';
    URL_INSTRUCTOR  = '/instructor';

    /* URL ADMIN */
    URL_ADMIN_CONTRATISTA = this.URL_ADMIN + '/contratistas';
    URL_ADMIN_CREAR_CONTRATISTA = this.URL_ADMIN_CONTRATISTA + '/crear';
    URL_ADMIN_EDITAR_CONTRATISTA = this.URL_ADMIN_CONTRATISTA + '/editar';

    URL_ADMIN_CURSO = this.URL_ADMIN + '/cursos';
    URL_ADMIN_CREAR_CURSO = this.URL_ADMIN_CURSO + '/crear';

    URL_ADMIN_EMPRESA = this.URL_ADMIN + '/contratantes';
    URL_ADMIN_CREAR_EMPRESA = this.URL_ADMIN_EMPRESA + '/crear';
    URL_ADMIN_EDITAR_EMPRESA = this.URL_ADMIN_EMPRESA + '/editar';

    URL_ADMIN_INSTRUCTOR = this.URL_ADMIN + '/instructores';
    URL_ADMIN_CREAR_INSTRUCTOR = this.URL_ADMIN_INSTRUCTOR + '/crear';
    URL_ADMIN_EDITAR_INSTRUCTOR = this.URL_ADMIN_INSTRUCTOR + '/editar';

    URL_ADMIN_MATRICULA = this.URL_ADMIN + '/matriculas';
    URL_ADMIN_CREAR_MATRICULA = this.URL_ADMIN_MATRICULA + '/crear';
    URL_ADMIN_SELECT_MATRICULA = this.URL_ADMIN_MATRICULA + '/select';
    URL_ADMIN_LICENCIA_MATRICULA = this.URL_ADMIN_MATRICULA + '/licencias';

    URL_ADMIN_MODULO = this.URL_ADMIN + '/modulos';

    URL_ADMIN_LICENCIA = this.URL_ADMIN + '/licencias';
    URL_ADMIN_CREAR_LICENCIA = this.URL_ADMIN_LICENCIA + '/crear';

    /* URL CONTRATISTA */
    URL_CONTRATISTA_MATRICULA = this.URL_CONTRATISTA + '/matriculas';
    URL_CONTRATISTA_CREAR_MATRICULA = this.URL_CONTRATISTA_MATRICULA + '/crear';
    URL_CONTRATISTA_SELECT_MATRICULA = this.URL_CONTRATISTA_MATRICULA + '/select';

    URL_CONTRATISTA_COLABORADOR = this.URL_CONTRATISTA + '/colaboradores';
    URL_CONTRATISTA_CREAR_COLABORADOR = this.URL_CONTRATISTA_COLABORADOR + '/crear';
    URL_CONTRATISTA_EDITAR_COLABORADOR = this.URL_CONTRATISTA_COLABORADOR + '/editar';

    /* ULR EMPRESA */
    URL_EMPRESA_CONTRATISTA = this.URL_EMPRESA + '/contratistas';
    URL_EMPRESA_CREAR_CONTRATISTA = this.URL_EMPRESA_CONTRATISTA + '/crear';
    URL_EMPRESA_EDITAR_CONTRATISTA = this.URL_EMPRESA_CONTRATISTA + '/editar';

    /* URL ALUMNO */
    URL_ALUMNO_DASHBOARD = this.URL_ALUMNO + '/dashboard';
    URL_ALUMNO_NOTAS= this.URL_ALUMNO + '/notas';

    /* URL INSTRUCTOR */
    URL_INSTRUCTOR_DASHBOARD = this.URL_INSTRUCTOR + '/dashboard';
  }
