import { Component, Inject, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarServices } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [{ provide: BarServices, useClass: BarServices }],
})
export class BarComponent implements OnInit {
  configManual: BarUnidadeConfig;
  config: BarUnidadeConfig;
  barBebida1: string;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private apiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private apiConfig: BarUnidadeConfig
  ) {}

  ngOnInit() {
    this.barBebida1 = this.barServices.obterBebidas();
    this.configManual = this.apiConfigManual;
    this.config = this.apiConfig;
  }
}
