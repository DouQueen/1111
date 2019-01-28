import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {

  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.hero = heroes);
    //
    //
    // this.hero = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
    console.log(this.hero);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
