import { Component, OnInit } from '@angular/core';
import {GameApiService} from './services/game-api.service';
import {Games} from '../interfaces/games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {
  games: Games[];

  filteredGames: any[];

  defaultSize = 400;
  width = 400;

  constructor(private gameApi: GameApiService) {
    // Nothing to do here..
  }

  ngOnInit() {
    this.getGamesList();
  }

  truncate(value: string) {
    const words = value.split(' ', 20);

    return words.join(' ') + (words.length > 20 ? + '' : '...');
  }

  buttonAlert(event) {
    alert('You clicked on ' + event.type + ' for the game ' + event.game);
  }

  sizeUp() {
    this.width += 10;
  }

  sizeDown() {
    this.width = Math.max(100, this.width - 10);
  }

  sizeReset() {
    this.width = this.defaultSize;
  }

  filtering(form) {
    this.filteredGames = this.games
      .filter(game =>
        (!form.name || game.title.includes(form.name))
        && (!form.type || (!!game.genres.find(genre => genre.id === Number(form.type))))
        && (!form.editor || game.publisher.name.includes(form.editor))
      );
  }

  getGamesList() {
    this.gameApi.getAllGames()
      .subscribe((data: Games[]) => {
        this.games = data;
        this.filtering({});
      });
  }
}
