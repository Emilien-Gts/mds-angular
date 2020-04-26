import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { GameActions } from './../game-actions';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  @Output()
  private readonly click = new EventEmitter<GameActions>();

  readonly delete = GameActions.DELETE;

  constructor() { }

  ngOnInit() {
  }

  onAction(action: GameActions, event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(action);
  }
}