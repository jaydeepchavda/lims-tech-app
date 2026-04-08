import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSendOut } from './project-send-out';

describe('ProjectSendOut', () => {
  let component: ProjectSendOut;
  let fixture: ComponentFixture<ProjectSendOut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSendOut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSendOut);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
