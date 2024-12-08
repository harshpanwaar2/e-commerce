import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusShowComponent } from './contactus-show.component';

describe('ContactusShowComponent', () => {
  let component: ContactusShowComponent;
  let fixture: ComponentFixture<ContactusShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactusShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
