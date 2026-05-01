import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-copy-project-definition',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './copy-project-definition.html',
  styleUrl: './copy-project-definition.css',
})
export class CopyProjectDefinition {
private fb = inject(FormBuilder);

  // Angular 21 Signals for dynamic data
  projects = signal(['Project Alpha', 'Project Beta', 'Project Gamma']);
  
  copyForm!: FormGroup;

  ngOnInit() {
    this.copyForm = this.fb.group({
      baseProjectId: ['PD2604044'],
      newClientCode: ['LANG01'],
      newClientName: ['Langan Engineering and Environmental Services,'],
      newProjectName: [''],
      customerContact: ['Jack Palmerton'],
      phone: [''],
      copyTestPrice: [true]
    });
  }

  onCopy() {
    // Generate the professional JSON payload
    const payload = {
      action: 'COPY_PROJECT_DEFINITION',
      originalSource: {
        id: 'PD2604044',
        client: 'LANG01',
        name: '1904 Bergen Street'
      },
      newDestination: this.copyForm.value,
      timestamp: new Date().toISOString()
    };

    console.log('Copy Project Request JSON:', payload);
    alert('Project Copy Initiated! Check console for JSON data.');
  }
}
