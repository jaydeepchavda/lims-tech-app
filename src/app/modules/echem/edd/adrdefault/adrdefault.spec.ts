import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADRDefault } from './adrdefault';

describe('ADRDefault', () => {
  let component: ADRDefault;
  let fixture: ComponentFixture<ADRDefault>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ADRDefault]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADRDefault);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
