import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    // { provide: BarServices, useClass: BarServices },
    {
      provide: BarServices,
      useFactory: BarFactory,
      deps: [HttpClient, Injector],
    },
    { provide: BebidaService, useExisting: BarServices },
  ],
})
export class BarComponent implements OnInit {
  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  dadosUnidade: string;
  barBebida1: string;
  barBebida2: string;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private apiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private apiConfig: BarUnidadeConfig,
    private bebidaService: BebidaService
  ) {}

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.apiConfigManual;
    this.config = this.apiConfig;
    this.dadosUnidade = this.barServices.obterUnidade();

    this.barBebida2 = this.bebidaService.obterBebidas();
  }
}
