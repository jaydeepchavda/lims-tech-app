import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMDefault } from './smdefault';

describe('SMDefault', () => {
  let component: SMDefault;
  let fixture: ComponentFixture<SMDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SMDefault]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMDefault);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
