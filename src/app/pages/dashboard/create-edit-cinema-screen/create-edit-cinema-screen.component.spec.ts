import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditCinemaScreenComponent } from './create-edit-cinema-screen.component';

describe('CreateEditCinemaScreenComponent', () => {
  let component: CreateEditCinemaScreenComponent;
  let fixture: ComponentFixture<CreateEditCinemaScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateEditCinemaScreenComponent]
    });
    fixture = TestBed.createComponent(CreateEditCinemaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
