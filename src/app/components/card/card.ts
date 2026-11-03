import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() nome!: string;
  @Input() idade!: number;
  @Input() ehInstrutor: boolean = false;

  @Output() exibirNome = new EventEmitter<string>();

  public onExibirNome(): void {
    this.exibirNome.emit('Nome é: ')
  }
}
