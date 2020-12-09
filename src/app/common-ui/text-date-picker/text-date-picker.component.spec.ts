import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDatePickerComponent } from './text-date-picker.component';

describe('TextDatePickerComponent', () => {
  let component: TextDatePickerComponent;
  let fixture: ComponentFixture<TextDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
