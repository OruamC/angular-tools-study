import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable()
export class ProdutoService {
  produtos: Produto[];

  constructor() {
    this.produtos = [
      {
        id: 1,
        nome: 'Test',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg',
      },
      {
        id: 2,
        nome: 'Test 2',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg',
      },
      {
        id: 3,
        nome: 'Test 3',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg',
      },
      {
        id: 4,
        nome: 'Test 4',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg',
      },
      {
        id: 5,
        nome: 'Test 5',
        ativo: true,
        valor: 500,
        imagem: 'teclado.jpg',
      },
      {
        id: 6,
        nome: 'Test 6',
        ativo: true,
        valor: 600,
        imagem: 'headset.jpg',
      },
    ];
  }

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterPorId(id: number): Produto {
    return this.produtos.find((produto) => produto.id == id);
  }
}
