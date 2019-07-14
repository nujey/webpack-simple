import { Component } from '@angular/core';

// @component装饰器会指出紧随其后的类是组件类 并且为其指定元数据

// 组件的元数据告诉angular到哪里获取需要的主要构造块 用来创建和展示这个组件以及视图
// 具体来说 就是把一个模板和组件关联起来 描述一个视图
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// AppComponent本身是一个普通类 完全是没有angular特有的标记和语法

// 但是加上了@Component之后，就会变成组件类

export class AppComponent {
  title = '英雄列表';
}
