import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Echem } from './echem';

describe('Echem', () => {
  let component: Echem;
  let fixture: ComponentFixture<Echem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Echem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Echem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
