import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDefinition } from './project-definition';

describe('ProjectDefinition', () => {
  let component: ProjectDefinition;
  let fixture: ComponentFixture<ProjectDefinition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDefinition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDefinition);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
