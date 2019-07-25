import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// 如果要把一个类定义为服务 就需要@injectable()装饰器来提供元数据 这样就可以让angular把它作为依赖注入到组件中
// 还需要@Injectable()装饰器来表明一个组件或其他类拥有一个依赖
  // 》》 注入器是主要的机制
  // 》》 注入器会创建依赖、维护一个容器来管理依赖，并且可复用
  // 》》 提供商是一个对象，用来告诉注入器应该如何获取或创建依赖

  // 如果要注册提供商的话 就需要在服务的@injectable()装饰器中提供元数据
  // 或者在NgModule或@Component()的元数据中

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
export class HeroService {
  // 依赖注入 可以把服务注入到组件中，让组件类得以访问该服务类
  // 可以通过查看服务类的构造函数 来决定该服务依赖哪些服务
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
