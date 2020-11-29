import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMatchButtonComponent } from './generate-match-button.component';

describe('GenerateMatchButtonComponent', () => {
  let component: GenerateMatchButtonComponent;
  let fixture: ComponentFixture<GenerateMatchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateMatchButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateMatchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
