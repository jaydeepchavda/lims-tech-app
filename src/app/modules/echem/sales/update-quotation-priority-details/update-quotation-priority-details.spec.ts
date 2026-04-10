import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuotationPriorityDetails } from './update-quotation-priority-details';

describe('UpdateQuotationPriorityDetails', () => {
  let component: UpdateQuotationPriorityDetails;
  let fixture: ComponentFixture<UpdateQuotationPriorityDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateQuotationPriorityDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuotationPriorityDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
