import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSamTestCancel } from './frm-sam-test-cancel';

describe('FrmSamTestCancel', () => {
  let component: FrmSamTestCancel;
  let fixture: ComponentFixture<FrmSamTestCancel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmSamTestCancel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmSamTestCancel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
