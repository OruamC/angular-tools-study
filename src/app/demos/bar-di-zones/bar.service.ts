import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

export function BarFactory(http: HttpClient, injector: Injector) {
  const config = injector.get(BAR_UNIDADE_CONFIG);
  return new BarServices(http, config);
}

@Injectable()
export class BarServices {
  constructor(
    private http: HttpClient,
    @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
  ) {}

  public obterUnidade(): string {
    return (
      'Unidade ID: ' +
      this.config.unidadeId +
      ' Token: ' +
      this.config.unidadeToken
    );
  }

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

export class BarServicesMock {
  constructor() {}

  obterBebidas() {
    return 'Mock';
  }

  obterPorcoes() {
    return 'Mock';
  }

  obterRefeicoes() {
    return 'Mock';
  }
}

export abstract class BebidaService {
  obterBebidas: () => string;
}
