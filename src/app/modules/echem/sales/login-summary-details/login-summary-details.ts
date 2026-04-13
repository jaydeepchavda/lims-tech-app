import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-summary-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-summary-details.html',
  styleUrl: './login-summary-details.css',
})
export class LoginSummaryDetails {
  private fb = inject(FormBuilder);

  // Angular 21 Signals for dynamic link list
  summaryLinks = signal([
    { label: 'Todays Login Summary', type: 'today' },
    { label: 'Yesterdays Login Summary', type: 'yesterday' },
    { label: 'Day Before Login Summary', type: 'dayBefore' },
    { label: 'Weekly Login Summary', type: 'weekly' },
    { label: 'Monthly Login Summary', type: 'monthly' }
  ]);

  // Unified Form Group for JSON capture
  summaryForm!: FormGroup;

  ngOnInit() {
    this.summaryForm = this.fb.group({
      from: [''],
      to: [''],
      clientType: ['All']
    });
  }

  onShow() {
    
    // Capture and display final JSON object
    const payload = {
      action: 'FILTER_SUMMARY',
      criteria: this.summaryForm.value,
      timestamp: new Date().toISOString()
    };

    console.log('Login Summary Request Payload:', payload);
    alert('Request Sent! Check console for JSON details.');
  }

  onLinkClick(type: string) {
    const linkPayload = {
      action: 'QUICK_LINK_ACCESS',
      reportType: type,
      clientType: this.summaryForm.get('clientType')?.value
    };
    console.log('Quick Link JSON:', linkPayload);
  }
}
