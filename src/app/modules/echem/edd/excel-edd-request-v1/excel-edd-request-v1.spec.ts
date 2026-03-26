import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelEddRequestV1 } from './excel-edd-request-v1';

describe('ExcelEddRequestV1', () => {
  let component: ExcelEddRequestV1;
  let fixture: ComponentFixture<ExcelEddRequestV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelEddRequestV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelEddRequestV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
