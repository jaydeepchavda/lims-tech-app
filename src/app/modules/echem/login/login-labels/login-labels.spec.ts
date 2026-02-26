import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLabels } from './login-labels';

describe('LoginLabels', () => {
  let component: LoginLabels;
  let fixture: ComponentFixture<LoginLabels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginLabels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginLabels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
