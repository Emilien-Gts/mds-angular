import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameActions } from './game-actions';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  defaultSize = 400;
  width = this.defaultSize;

  entities: Game[] = [
    {
      id: 1,
      name: 'Monster Hunter',
      description: 'Monster Hunter est une série de jeux vidéo développée et éditée par Capcom. La série commence avec le jeu Monster Hunter sur PlayStation 2 où, comme le titre de la série le suggère, le joueur incarne un chasseur, dans un environnement fantasy, qui complète des quêtes ayant pour but, principalement, de chasser ou capturer des monstres et aussi de collecter des minéraux, poissons, petits monstres.',
      editor: 'Capcom',
      image: 'https://i.pinimg.com/originals/28/0f/d3/280fd3bf4859179d926ec500b4d6e940.jpg',
      note: 9.9,
      category: 'Role'
    }, 
    {
      id: 2,
      name: 'Dragon quest XI',
      description: 'Dragon Quest XI : Les Combattants de la destinée est un jeu vidéo de rôle développé par Square Enix et Armor Project et distribué par Square Enix. Il s\'agit du onzième épisode principal de la série Dragon Quest.',
      editor: 'Square Enix',
      image: 'https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_dragon_quest_xi_echoes_of_an_elusive_age_01_1920x1080.jpg',
      note: 9.5,
      category: 'RPG'
    }
  ];

  filteredEntities = this.entities;

  constructor() { }

  ngOnInit() {

  }

  truncate(value: string) {
    const words = value.split(' ', 20);

    return words.join(' ') + (words.length > 20 ? + '' : '...');
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

  onActionClick(action: GameActions, game: Game) {
    alert(`${['follow', 'share', 'buy'][action]} the game nammed ${game.name}`);
  }

  onFilter(filterForm: GameFilter) {
    this.filteredEntities = this.entities
        .filter(e => (!filterForm.name || e.name.toLocaleLowerCase().includes(filterForm.name))
            && (!filterForm.category || e.category === filterForm.category)
            && (!filterForm.editor || e.editor.toLowerCase().includes(filterForm.editor)));
  }
}
