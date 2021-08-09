import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private _contatos: any;

  constructor(private router: Router) {
    this._contatos = [
        { nome: 'Contato 1', telefone: "(42)98888-8888" },
        { nome: 'Bruno', telefone: "(42)98888-8888" },
        { nome: 'Vinicius', telefone: "(42)98888-8888" }
    ];
  }

  private pageCadastro(): void {
    this.router.navigate(['cadastrar'])
  }
}