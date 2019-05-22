import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

// @component是装饰器函数,用于为该组件制定angular所需的元数据
@Component({
  selector: 'app-heros', // 组建的选择器[CSS元素选择器]
  templateUrl: './heros.component.html', // 组件模版文件的位置
  styleUrls: ['./heros.component.sass'] // 组件私有CSS样式表文件的位置
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit() {

  }

}
