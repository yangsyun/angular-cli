import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-input-model',
  templateUrl: './input-model.component.html',
  styleUrls: ['./input-model.component.scss']
})
export class InputModelComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
