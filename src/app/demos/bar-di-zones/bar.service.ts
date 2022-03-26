import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BarServices {
  constructor(private http: HttpClient) {}

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
