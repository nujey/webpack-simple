import { Component } from '@angular/core';

// @component装饰器会指出紧随其后的类是组件类 并且为其指定元数据

// 组件的元数据告诉angular到哪里获取需要的主要构造块 用来创建和展示这个组件以及视图
// 具体来说 就是把一个模板和组件关联起来 描述一个视图
@Component({
  // css选择器 在html中找到选择器对应的标签 插入组件 
  selector: 'app-root',
  // 组件的html模板文件，模板定义了组件的宿主视图
  templateUrl: './app.component.html',
  // 视图层的样式问价
  styleUrls: ['./app.component.scss'],
  // 组件的服务
  providers: []
})

// 视图通常是分层次进行组织，然后让UI分区域或页面进行修改、显示、隐藏
// 与组件直接关联的模板会定义该组件的宿主视图 组件还可以定义一个带层次结构的视图 包含一些内嵌的视图作为宿主

// AppComponent本身是一个普通类 完全是没有angular特有的标记和语法

// 但是加上了@Component之后，就会变成组件类

export class AppComponent {
  title = '英雄列表';
}
