import { SeguridadService } from './../services/seguridad.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private serguridadService: SeguridadService) { }

  intercept(req, next) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.serguridadService.ObtenerToken()}`
      }
    });
    return next.handle(tokenReq);
  }


}
