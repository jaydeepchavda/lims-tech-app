import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-quotation-priority-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-quotation-priority-details.html',
  styleUrl: './update-quotation-priority-details.css',
})
export class UpdateQuotationPriorityDetails {
private fb = inject(FormBuilder);

  // Signals for Dropdown and Structural Data
  dropdownData = signal({
    packageTypes: ['Standard', 'Rush', 'Custom'],
    eddFormats: ['CSV', 'Excel', 'XML', 'PDF'],
    terms: ['Net 30', 'Net 15', 'Due on Receipt']
  });

  priorities = signal([
    { label: '10 BD', controlName: 'p10bd', default: 0 },
    { label: '5 BD', controlName: 'p5bd', default: 15 },
    { label: '3 BD', controlName: 'p3bd', default: 35 },
    { label: '2 BD', controlName: 'p2bd', default: 50 },
    { label: '1 BD', controlName: 'p1bd', default: 100 },
    { label: 'SD', controlName: 'psd', default: 200 },
    { label: '15 BD', controlName: 'p15bd', default: 0 },
    { label: '20 BD', controlName: 'p20bd', default: 0 }
  ]);

  // Unified FormGroup for JSON data capture
  priorityForm: FormGroup = this.fb.group({
    quotationId: [''],
    packageType: [''],
    eddFormat1: [''],
    eddFormat2: [''],
    eddFormat3: [''],
    eddFormat4: [''],
    terms: [''],
    liquidatedDamages: ['No'],
    retentionDays: [30],
    yearsKeepReport: [5],
    retentionPercentage: [0],
    startDate: [''],
    endDate: [''],
    projectDuration: [''],
    hardCopyTat: [10],
    specialMdl: ['NO'],
    msmsdRequired: ['NO'],
    msmsdBillable: ['NO'],
    // Surcharges
    p10bd: [0], p5bd: [15], p3bd: [35], p2bd: [50], 
    p1bd: [100], psd: [200], p15bd: [0], p20bd: [0],
    // Comments
    pmComments: [''],
    qcComments: [''],
    salesComments: ['']
  });

  onSubmit() {
    // Captures all data in one professional JSON object
    const finalData = this.priorityForm.value;
    console.log('Final Priority Details JSON Payload:', finalData);
    
    // Example of using signals for if/else logic on submit
    if (finalData.quotationId === '') {
      alert('Error: Quotation ID is required.');
    } else {
      alert('Priority details submitted successfully!');
    }
  }
}
