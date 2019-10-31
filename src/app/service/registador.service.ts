import { Injectable } from '@angular/core';

import { Registo } from '../models/registo';

@Injectable({
  providedIn: 'root'
})
export class RegistadorService {
  private registos: Registo[] = [];

  constructor() {}

  addRegisto(
    entidade: string,
    tipo: string,
    codigo: string,
    valor: number
  ): Registo[] {
    console.log(entidade, tipo, codigo, valor);

    const registo = new Registo(this.getId(), entidade, tipo, codigo, valor);
    this.registos = this.registos.concat([registo]);
    return this.registos;
  }

  getRegistos(): Registo[] {
    if (this.registos.length === 0) {
      const reg1 = new Registo(
        1,
        'Foobar Co.',
        'Cheque Criança',
        'APV19/1',
        75
      );
      const reg2 = new Registo(2, 'Aniak Co.', 'Vale', 'APV19/2', 40);

      this.registos = [reg1, reg2];
    }
    return this.registos;
  }

  private getId(): number {
    return this.registos.length + 1;
  }
}
