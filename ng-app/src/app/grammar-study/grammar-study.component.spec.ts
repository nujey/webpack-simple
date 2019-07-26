import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarStudyComponent } from './grammar-study.component';

describe('GrammarStudyComponent', () => {
  let component: GrammarStudyComponent;
  let fixture: ComponentFixture<GrammarStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
