import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanRegCleaningBatch } from './can-reg-cleaning-batch';

describe('CanRegCleaningBatch', () => {
  let component: CanRegCleaningBatch;
  let fixture: ComponentFixture<CanRegCleaningBatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanRegCleaningBatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanRegCleaningBatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
