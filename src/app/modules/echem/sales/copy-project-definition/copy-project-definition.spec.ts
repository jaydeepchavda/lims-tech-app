import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyProjectDefinition } from './copy-project-definition';

describe('CopyProjectDefinition', () => {
  let component: CopyProjectDefinition;
  let fixture: ComponentFixture<CopyProjectDefinition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyProjectDefinition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyProjectDefinition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
