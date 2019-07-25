import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
// 我们不需要使用AppComponent类来new一个实例，因为angular帮我们创建好了
// 我们只需要在@COmponent装饰器中添加对应的元数据即可，会根据选择器来指定一个占位符


@Component({
  selector: 'app-messages', // 占位符
  templateUrl: './messages.component.html',
  // 还可以是template,然后直接是一个字符串模板
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
