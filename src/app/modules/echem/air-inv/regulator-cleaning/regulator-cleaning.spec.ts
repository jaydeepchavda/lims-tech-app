import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorCleaning } from './regulator-cleaning';

describe('RegulatorCleaning', () => {
  let component: RegulatorCleaning;
  let fixture: ComponentFixture<RegulatorCleaning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegulatorCleaning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegulatorCleaning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
