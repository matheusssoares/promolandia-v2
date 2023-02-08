import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.page.html',
  styleUrls: ['./cadastrar-empresa.page.scss'],
})
export class CadastrarEmpresaPage implements OnInit {
  public empresa: Empresa;
  constructor() { }

  ngOnInit() {
  }

  getEmpresa() {

  }
}
