import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from './heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: `./hero-detail.component.html`,
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;


  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/input-model', this.selectedHero.id]);
  }
}
