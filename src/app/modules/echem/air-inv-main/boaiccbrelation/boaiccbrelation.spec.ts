import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BOAICCBRelation } from './boaiccbrelation';

describe('BOAICCBRelation', () => {
  let component: BOAICCBRelation;
  let fixture: ComponentFixture<BOAICCBRelation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BOAICCBRelation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BOAICCBRelation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
