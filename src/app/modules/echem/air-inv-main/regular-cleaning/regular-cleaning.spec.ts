import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCleaning } from './regular-cleaning';

describe('RegularCleaning', () => {
  let component: RegularCleaning;
  let fixture: ComponentFixture<RegularCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularCleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularCleaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
