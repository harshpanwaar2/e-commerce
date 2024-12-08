import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartShowComponentComponent } from './cart-show-component.component';

describe('CartShowComponentComponent', () => {
  let component: CartShowComponentComponent;
  let fixture: ComponentFixture<CartShowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartShowComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartShowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
