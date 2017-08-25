import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];

  constructor( private router: Router, ) { }

  ngOnInit() {
  }

  goToInput() {
    this.router.navigateByUrl('input-model');
  }

}
