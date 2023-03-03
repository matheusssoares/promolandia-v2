import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
})
export class HeaderAdminComponent implements OnInit {
  @Input() modelHeader = 1;
  @Input() imagem: string;
  @Input() nome: string;
  public notificationsCount = 12;

  constructor() { }

  showNotifications() {
    // Lógica para exibir as notificações
  }

  ngOnInit() {}

  obterPrimeiroNome(nomeCompleto: string): string {
    const partesDoNome = nomeCompleto.trim().split(' ');
    const primeiroNome: string = partesDoNome[0];
    return primeiroNome.toLowerCase();
  }

}
