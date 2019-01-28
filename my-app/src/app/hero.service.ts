import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock_heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(  private http: HttpClient,
                private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
