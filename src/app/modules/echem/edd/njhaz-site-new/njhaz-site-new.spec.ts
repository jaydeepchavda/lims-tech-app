import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NJHazSiteNew } from './njhaz-site-new';

describe('NJHazSiteNew', () => {
  let component: NJHazSiteNew;
  let fixture: ComponentFixture<NJHazSiteNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NJHazSiteNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NJHazSiteNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
