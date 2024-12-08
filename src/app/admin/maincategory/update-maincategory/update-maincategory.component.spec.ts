import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaincategoryComponent } from './update-maincategory.component';

describe('UpdateMaincategoryComponent', () => {
  let component: UpdateMaincategoryComponent;
  let fixture: ComponentFixture<UpdateMaincategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMaincategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaincategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
