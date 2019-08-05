import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-grammar-study',
  templateUrl: './grammar-study.component.html',
  styleUrls: ['./grammar-study.component.scss']
})

export class GrammarStudyComponent implements OnInit {
  // 自定义时间
  @Output() deleteRequest = new EventEmitter<Item>()
  // 双向绑定的
  @Input() size: number | string
  @Output() sizeChange = new EventEmitter<number>()

  constructor() { }
  canSave: true
  isSpecial: false
  currentClasses: { }
  currentStyles: {}

  ngOnInit() {
  }
  deleteHero(): void {
    
  }
  setCurrentClasses() {
    this.currentClasses = {
      'saveable': this.canSave,
      'special': this.isSpecial ? true : false
    }
  }
  seturrentStyles() {
    this.currentStyles = {
      'font-size': this.isSpecial ? '24px' : '12px'
    }
  }
  delete() {
    this.deleteRequest.emit(this.item)
  }

  dec() {
    this.resize(-1)
  }
  inc() {
    this.resize(+1)
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta))
    this.sizeChange.emit(this.size)
  }
}
