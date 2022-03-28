import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BarServices {
  constructor() {}

  obterBebidas() {
    return 'Bebidas';
  }

  obterPorcoes() {
    return 'Porções';
  }

  obterRefeicoes() {
    return 'Refeições';
  }
}
