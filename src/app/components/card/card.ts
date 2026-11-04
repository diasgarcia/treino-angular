import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CpfPipe } from '../cpf-pipe';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CpfPipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() nome!: string;
  @Input() idade!: number;
  @Input() cpf!: string;
  @Input() corFavorita!: string;
  @Input() nota?: number;
  @Input() ehInstrutor: boolean = false;

  @Output() exibirNome = new EventEmitter<string>();

  public get avatarBgColor(): string {
    switch (this.corFavorita?.toLowerCase()) {
      case 'azul':
        return '#4c6eff';
      case 'rosa':
        return '#ff4d8d';
      case 'verde':
        return '#22c55e';
      case 'vermelho':
        return '#ef4444';
      case 'roxo':
        return '#8b5cf6';
      case 'amarelo':
        return '#f59e0b';
      case 'laranja':
        return '#f97316';
      default:
        return '#4c6fff';
    }
  }

  public onExibirNome(): void {
    this.exibirNome.emit('Nome é: ')
  }
}
