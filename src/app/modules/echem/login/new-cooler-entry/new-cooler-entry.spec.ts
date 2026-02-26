import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoolerEntry } from './new-cooler-entry';

describe('NewCoolerEntry', () => {
  let component: NewCoolerEntry;
  let fixture: ComponentFixture<NewCoolerEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCoolerEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCoolerEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
