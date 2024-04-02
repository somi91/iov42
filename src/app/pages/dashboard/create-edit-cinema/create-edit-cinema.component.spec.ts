import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditCinemaComponent } from './create-edit-cinema.component';

describe('CreateEditCinemaComponent', () => {
  let component: CreateEditCinemaComponent;
  let fixture: ComponentFixture<CreateEditCinemaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateEditCinemaComponent]
    });
    fixture = TestBed.createComponent(CreateEditCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
