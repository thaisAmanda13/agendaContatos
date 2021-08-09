import { Injectable } from '@angular/core';
import {Contato} from '../class/contato'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos : Contato[] = []
  constructor()
  { 
    this.contatos.push(new Contato("Contato Exemplo",42988888888,"19/11/1999","f"))
  }

  public getContatos() : Contato[]{
    
    return this.contatos
  }
  public cadastrar(contato : Contato):void
  {
    this.contatos.push(contato)
  }
}
