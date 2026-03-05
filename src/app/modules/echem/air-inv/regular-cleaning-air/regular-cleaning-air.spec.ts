import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularCleaningAir } from './regular-cleaning-air';

describe('RegularCleaningAir', () => {
  let component: RegularCleaningAir;
  let fixture: ComponentFixture<RegularCleaningAir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularCleaningAir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularCleaningAir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
