import { Component, OnInit } from '@angular/core';

import { RegistadorService } from '../../service/registador.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registar-form',
  templateUrl: './registar-form.component.html',
  styleUrls: ['./registar-form.component.css']
})
export class RegistarFormComponent implements OnInit {
  constructor(
    private registadorService: RegistadorService,
    private router: Router
  ) {}

  ngOnInit() {}

  foobar(
    entidade: HTMLInputElement,
    tipo: HTMLInputElement,
    valor: HTMLInputElement
  ): boolean {
    const registos = this.registadorService.addRegisto(
      entidade.value,
      tipo.value,
      'APEE2019',
      Number(valor.value)
    );
    console.log(registos);

    entidade.value = '';
    tipo.value = '';
    valor.value = '';

    if (registos.length) {
      this.router.navigate(['/']);
    }

    return false;
  }
}
