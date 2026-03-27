import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultExcelEDD } from './result-excel-edd';

describe('ResultExcelEDD', () => {
  let component: ResultExcelEDD;
  let fixture: ComponentFixture<ResultExcelEDD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultExcelEDD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultExcelEDD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
