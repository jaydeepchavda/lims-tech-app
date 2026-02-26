import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerEntry } from './cooler-entry';

describe('CoolerEntry', () => {
  let component: CoolerEntry;
  let fixture: ComponentFixture<CoolerEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolerEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolerEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
