import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerexampleComponent } from './datepickerexample.component';

describe('DatepickerexampleComponent', () => {
  let component: DatepickerexampleComponent;
  let fixture: ComponentFixture<DatepickerexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatepickerexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
