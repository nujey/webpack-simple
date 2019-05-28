import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  private heroesUrl = 'api/heroes'

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes')
    // return of(HEROES)
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }
  private handleError <T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }
}
