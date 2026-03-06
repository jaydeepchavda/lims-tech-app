import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegulator } from './view-regulator';

describe('ViewRegulator', () => {
  let component: ViewRegulator;
  let fixture: ComponentFixture<ViewRegulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRegulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegulator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
