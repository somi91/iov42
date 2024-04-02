import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditScreeningComponent } from './create-edit-screening.component';

describe('CreateEditScreeningComponent', () => {
  let component: CreateEditScreeningComponent;
  let fixture: ComponentFixture<CreateEditScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateEditScreeningComponent]
    });
    fixture = TestBed.createComponent(CreateEditScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
