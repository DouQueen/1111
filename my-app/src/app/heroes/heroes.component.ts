import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock_heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[] = HEROES;
  selectedHero: Hero;
  constructor() { }


  ngOnInit() {
    console.log(this.hero);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

}
