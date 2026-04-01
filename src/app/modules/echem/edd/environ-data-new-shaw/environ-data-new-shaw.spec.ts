import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironDataNewSHAW } from './environ-data-new-shaw';

describe('EnvironDataNewSHAW', () => {
  let component: EnvironDataNewSHAW;
  let fixture: ComponentFixture<EnvironDataNewSHAW>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironDataNewSHAW]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironDataNewSHAW);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
