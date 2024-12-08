import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaincategoryComponent } from './create-maincategory.component';

describe('CreateMaincategoryComponent', () => {
  let component: CreateMaincategoryComponent;
  let fixture: ComponentFixture<CreateMaincategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMaincategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMaincategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
