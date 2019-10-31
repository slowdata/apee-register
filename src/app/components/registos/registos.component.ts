import { Component, OnInit } from '@angular/core';

import { RegistadorService } from '../../service/registador.service';
import { Registo } from '../../models/registo';

@Component({
  selector: 'app-registos',
  templateUrl: './registos.component.html',
  styleUrls: ['./registos.component.css']
})
export class RegistosComponent implements OnInit {
  registos: Registo[] = [];

  constructor(private registadorService: RegistadorService) {}

  ngOnInit() {
    this.registos = this.registadorService.getRegistos();
  }
}
