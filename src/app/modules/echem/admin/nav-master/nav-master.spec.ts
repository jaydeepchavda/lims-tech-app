import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMaster } from './nav-master';

describe('NavMaster', () => {
  let component: NavMaster;
  let fixture: ComponentFixture<NavMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMaster]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
