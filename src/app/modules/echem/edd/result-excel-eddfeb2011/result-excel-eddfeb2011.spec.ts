import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultExcelEDDFeb2011 } from './result-excel-eddfeb2011';

describe('ResultExcelEDDFeb2011', () => {
  let component: ResultExcelEDDFeb2011;
  let fixture: ComponentFixture<ResultExcelEDDFeb2011>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultExcelEDDFeb2011]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultExcelEDDFeb2011);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
