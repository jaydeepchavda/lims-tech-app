import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSummaryDetails } from './login-summary-details';

describe('LoginSummaryDetails', () => {
  let component: LoginSummaryDetails;
  let fixture: ComponentFixture<LoginSummaryDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSummaryDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSummaryDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
