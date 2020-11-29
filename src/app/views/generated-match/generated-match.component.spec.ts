import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedMatchComponent } from './generated-match.component';

describe('GeneratedMatchComponent', () => {
  let component: GeneratedMatchComponent;
  let fixture: ComponentFixture<GeneratedMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
