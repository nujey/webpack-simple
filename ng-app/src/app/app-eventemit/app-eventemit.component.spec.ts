import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEventemitComponent } from './app-eventemit.component';

describe('AppEventemitComponent', () => {
  let component: AppEventemitComponent;
  let fixture: ComponentFixture<AppEventemitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEventemitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEventemitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
