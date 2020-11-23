import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title1Component } from './title1.component';

describe('Title1Component', () => {
  let component: Title1Component;
  let fixture: ComponentFixture<Title1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Title1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Title1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
