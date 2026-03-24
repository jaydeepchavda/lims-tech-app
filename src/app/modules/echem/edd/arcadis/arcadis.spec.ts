import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arcadis } from './arcadis';

describe('Arcadis', () => {
  let component: Arcadis;
  let fixture: ComponentFixture<Arcadis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arcadis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arcadis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
