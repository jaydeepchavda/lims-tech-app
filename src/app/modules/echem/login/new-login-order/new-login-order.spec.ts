import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoginOrder } from './new-login-order';

describe('NewLoginOrder', () => {
  let component: NewLoginOrder;
  let fixture: ComponentFixture<NewLoginOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLoginOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLoginOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
