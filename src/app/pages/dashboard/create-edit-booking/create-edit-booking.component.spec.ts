import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditBookingComponent } from './create-edit-booking.component';

describe('CreateEditBookingComponent', () => {
  let component: CreateEditBookingComponent;
  let fixture: ComponentFixture<CreateEditBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateEditBookingComponent]
    });
    fixture = TestBed.createComponent(CreateEditBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
