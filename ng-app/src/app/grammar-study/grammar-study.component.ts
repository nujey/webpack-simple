import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar-study',
  templateUrl: './grammar-study.component.html',
  styleUrls: ['./grammar-study.component.scss']
})
export class GrammarStudyComponent implements OnInit {

  constructor() { }
  canSave: true
  isSpecial: false
  currentClasses: { }
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
}
