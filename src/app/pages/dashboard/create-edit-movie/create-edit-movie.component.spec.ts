import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditMovieComponent } from './create-edit-movie.component';

describe('CreateEditMovieComponent', () => {
  let component: CreateEditMovieComponent;
  let fixture: ComponentFixture<CreateEditMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateEditMovieComponent]
    });
    fixture = TestBed.createComponent(CreateEditMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
