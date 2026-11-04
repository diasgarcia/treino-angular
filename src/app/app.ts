import { Component, signal } from '@angular/core';
import { Card } from './components/card/card'
import { Pessoa } from './components/pessoa.interface';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula-01');

  public pessoas: Pessoa[] = [
    {
      nome: 'Rafael Dias Garcia',
      idade: 23,
      cpf: '00000000000',
      ehInstrutor: true,
      corFavorita: 'azul',
    },
    {
      nome: 'Joao da Silva',
      idade: 24,
      cpf: '00000000001',
      ehInstrutor: true,
      corFavorita: 'rosa',
    },
    {
      nome: 'Pedro',
      idade: 22,
      cpf: '00000000002',
      ehInstrutor: false,
      nota: 9.5,
      corFavorita: 'verde',
    },
    {
      nome: 'Carlos',
      idade: 26,
      cpf: '00000000003',
      ehInstrutor: false,
      nota: 6.5,
      corFavorita: 'vermelho',
    }
  ]

  public onExibirNome(event: string, nome: string): void {
    alert(event + nome);
  }
}
