import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface GameFilter {
  name: string;
  category: string;
  editor: string;
}

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.scss']
})
export class GameListFilterComponent implements OnInit {

  gameCategories = [
    'Role', 'RPG'
  ];

  form: GameFilter = { name: '', category: '', editor: '' };

  @Output()
  filter = new EventEmitter<GameFilter>();

  constructor() { }

  ngOnInit() {
  }

  onChange(key: string, value: string) {
    if (key !== 'category') { value = value.trim().toLowerCase(); }
    this.form[key] = value;
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.filter.emit(this.form);
  }

  onReset() {
    this.form = { name: '', category: '', editor: '' };
    this.filter.emit(this.form);
  }

}
