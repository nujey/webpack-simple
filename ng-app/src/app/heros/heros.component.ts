import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'

// @component是装饰器函数,用于为该组件制定angular所需的元数据
@Component({
  selector: 'app-heros', // 组建的选择器[CSS元素选择器]
  templateUrl: './heros.component.html', // 组件模版文件的位置
  styleUrls: ['./heros.component.scss'] // 组件私有CSS样式表文件的位置
})
export class HerosComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }
  heroes: Hero[]
  // selectedHero: Hero
  // 查看组件类的构造函数，来决定组件依赖哪些服务或者依赖项
  constructor(private heroService: HeroService) { 

  }

  ngOnInit() {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  // onSelect(hero: Hero) {
  //   this.selectedHero = hero
  // }
}
