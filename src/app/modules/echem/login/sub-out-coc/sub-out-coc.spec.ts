import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOutCoc } from './sub-out-coc';

describe('SubOutCoc', () => {
  let component: SubOutCoc;
  let fixture: ComponentFixture<SubOutCoc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubOutCoc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubOutCoc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
