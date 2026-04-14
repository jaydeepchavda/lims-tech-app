import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPeriod } from './sales-period';

describe('SalesPeriod', () => {
  let component: SalesPeriod;
  let fixture: ComponentFixture<SalesPeriod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesPeriod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPeriod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
