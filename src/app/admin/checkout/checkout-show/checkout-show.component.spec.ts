import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutShowComponent } from './checkout-show.component';

describe('CheckoutShowComponent', () => {
  let component: CheckoutShowComponent;
  let fixture: ComponentFixture<CheckoutShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
