import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-eventemit',
  templateUrl: './app-eventemit.component.html',
  styleUrls: ['./app-eventemit.component.scss'],
  inputs: ['hero'], // 在组件的指令元数据中标记这些成员
  outputs: ['deleteRequest']
})

export class AppEventemitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  trackByHeroes(index: number, hero: Hero): number {
    return hero.id
  }
}
