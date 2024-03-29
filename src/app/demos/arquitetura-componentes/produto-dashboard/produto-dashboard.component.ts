import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [],
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[];

  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent)
  botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.produtos = this.route.snapshot.data['produtos'];
  }

  ngAfterViewInit(): void {
    // console.log('Objeto do contador: ', this.contador.produtos);

    let clickTexto: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      'click'
    );
    clickTexto.subscribe(() => {
      alert('Texto clicado');
      return;
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
