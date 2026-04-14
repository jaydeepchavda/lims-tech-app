import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-project-definition',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './project-definition.html',
  styleUrl: './project-definition.css',
})
export class ProjectDefinition {
private fb = inject(FormBuilder);

  // Angular 21 Signals for dynamic data handling
  projectDefCode = signal<string>('PD2604027');
  
  projectForm!: FormGroup;

  ngOnInit() {
    this.projectForm = this.fb.group({
      // Client Info
      projectDefId: ['PD2604027'],
      clientCode: ['PSEG03', Validators.required],
      clientName: ['PSEG'],
      projectName: ['PSEG Central', Validators.required],
      customerContact: ['Andrew', Validators.required],
      phone: [''],
      comment: [''],

      // Dynamic Edd/Criteria (Generates all 12 controls)
      ...this.generateGridControls('eddFormat', 12, 'EXCEL'),
      ...this.generateGridControls('criteria', 12, 'NONE'),

      // Deliverables Info
      hardcopyNeeded: ['No'],
      cdRequired: ['No'],
      deliverables: ['Results Only', Validators.required],
      copies: ['1'],
      cds: ['0'],
      tat: ['10'],

      // Other Info
      mbeRequired: ['No'],
      certsNeeded: ['Yes'],
      msmsdRequired: ['No'],
      bottleDelivery: ['No'],
      pickupRequired: ['No'],
      sbeRequired: ['No'],
      agencies: ['NJDEP'],
      billable: ['No'],
      bottleCount: [''],
      pickupCount: ['']
    });
  }

  // Helper to generate dynamic controls for the 12x12 grid
  private generateGridControls(prefix: string, count: number, defaultValue: string) {
    const controls: any = {};
    for (let i = 1; i <= count; i++) {
      controls[prefix + i] = [defaultValue];
    }
    return controls;
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log('Project Definition JSON:', this.projectForm.value);
      alert('Project saved. Data logged to console.');
    } else {
      alert('Please fill all required fields (*) marked in red.');
    }
  }
}
