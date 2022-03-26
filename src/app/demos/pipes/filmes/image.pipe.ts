import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageformater',
})
export class imageformaterPipe implements PipeTransform {
  transform(imagem: String, caminho: string = '', substituir: boolean) {
    if (caminho == 'default') caminho = 'assets';

    if (imagem.length == 0 && substituir) imagem = 'semCapa.jpg';

    return '/' + caminho + '/' + imagem;
  }
}
