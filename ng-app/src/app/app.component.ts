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

var str = '数据绑定 '
// {{插值表达式}} 、[属性绑定] 、 (事件绑定)
// 双向数据绑定主要用于模版驱动表单 把属性绑定和事件绑定组合成遗种单独的写法 [(ngModel)]=".."
// 双向数据绑定 其实是数据的属性值通过属性绑定从组件到视图的输入框
// 用户的修改通过事件绑定流回组件，把属性值设置为最新的值

// javascript事件循环中处理所有的数据绑定 组件树的根部开始，递归处理全部的子组件

var str1 = '管道'
// 管道其实就是过滤器 可以在模板中声明显示值的转换逻辑
//  {{ interpolated_value | pipe_name }}



// AppComponent本身是一个普通类 完全是没有angular特有的标记和语法

// 但是加上了@Component之后，就会变成组件类

export class AppComponent {
  title = '英雄列表';
}
