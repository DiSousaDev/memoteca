import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { PensamentoService } from "../pensamento.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { minusculoValidator } from "./minusculoValidators";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        minusculoValidator
      ])],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listar-pensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamento'])
  }

  habilitarBotao(valid: boolean) {
    if(valid) {
      return 'botao';
    }
    return 'botao__desabilitado';
  }

}
