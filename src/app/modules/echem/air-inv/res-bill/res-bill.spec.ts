import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResBill } from './res-bill';

describe('ResBill', () => {
  let component: ResBill;
  let fixture: ComponentFixture<ResBill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResBill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResBill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
