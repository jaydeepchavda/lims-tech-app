import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepMethods } from './prep-methods';

describe('PrepMethods', () => {
  let component: PrepMethods;
  let fixture: ComponentFixture<PrepMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrepMethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrepMethods);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
