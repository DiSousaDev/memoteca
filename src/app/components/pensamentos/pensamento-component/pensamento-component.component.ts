import { Component, Input } from '@angular/core';
import { Pensamento } from "../pensamento";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento-component.component.html',
  styleUrls: ['./pensamento-component.component.css']
})
export class PensamentoComponentComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}