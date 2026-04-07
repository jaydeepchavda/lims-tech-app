import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSales } from './home-sales';

describe('HomeSales', () => {
  let component: HomeSales;
  let fixture: ComponentFixture<HomeSales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSales]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
