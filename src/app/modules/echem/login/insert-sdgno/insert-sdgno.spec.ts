import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSDGNo } from './insert-sdgno';

describe('InsertSDGNo', () => {
  let component: InsertSDGNo;
  let fixture: ComponentFixture<InsertSDGNo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertSDGNo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSDGNo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
