import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'

// ngModule是一个带有装饰器的类 @Ngmodule()装饰器是一个函数，接受一个元数据对象，对象的属性用来描述这个模块
@NgModule({
  // 可声明对象表 
  // 主要包括属于本NgModule的组件，指令、管道
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  // 导出表 能在其他模块的组件模版中使用的可声明对象的子集
  // 演示导出，实际上，根模块不需要导出任何东西，因为其他的模块不需要导入跟模块
  exports: [],
  // 导入表 导出了本模块中的组件模版所需的类的其他模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 本模块向全剧服务中贡献的那些服务的创建器 这些服务能被本应用中的任何部分使用
  // 通常在组件级别指定服务提供商
  providers: [],
  // 应用的主视图 跟组件 所有其他视图的诉诸
  // 只有根模块才应该设置这个bootstrap属性
  bootstrap: [AppComponent]
})
// ngModule为组件提供编译上下文环境 根模块总会有一个根组件
// 任何模块都能包含任意数量的其他组件，组件可以通过路由器加载 也可以通过模板创建
export class AppModule { }
