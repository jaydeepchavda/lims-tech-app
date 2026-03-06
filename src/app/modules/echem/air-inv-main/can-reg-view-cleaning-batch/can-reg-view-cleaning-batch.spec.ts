import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanRegViewCleaningBatch } from './can-reg-view-cleaning-batch';

describe('CanRegViewCleaningBatch', () => {
  let component: CanRegViewCleaningBatch;
  let fixture: ComponentFixture<CanRegViewCleaningBatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanRegViewCleaningBatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanRegViewCleaningBatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
