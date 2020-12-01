import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class RenderService {
  public ids = new Array();

  constructor() { }

  setIdsControler(value: any[]) {
    this.ids = value;
  }

  getIdsControler(): any[] {
    return this.ids;
  }

  esconderControles(): boolean {
    for (const id of this.ids) {
      if ($('#' + id).length > 0) {
        return false;
      }
    }
  }

  mostrarControles() {
    for (const id of this.ids) {
      $('#' + id).show();
    }
  }

  matchControl(idControl: string): boolean {
    for (let i = 0; i < this.ids.length; i++) {
      if (this.ids[i] === idControl) {
        return true;
      }
      return false;
    }
  }
}
