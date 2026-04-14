import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sales-period',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './sales-period.html',
  styleUrl: './sales-period.css',
})
export class SalesPeriod {
private fb = inject(FormBuilder);

  // Angular 21 Signals for dynamic data
  executives = signal(['JAMES', 'SARAH', 'MICHAEL', 'EMILY']);
  
  checkboxOptions = signal([
    { label: 'Login Summary', control: 'loginSummary' },
    { label: 'Won Quotation', control: 'wonQuotation' },
    { label: 'Lost Quotation', control: 'lostQuotation' },
    { label: 'Total Quotation', control: 'totalQuotation' },
    { label: 'Projection', control: 'projection' },
    { label: 'Sales Activity', control: 'salesActivity' },
    { label: 'Schedular', control: 'schedular' },
    { label: 'Prospected Clients', control: 'prospectedClients' }
  ]);

  salesForm!: FormGroup;

  ngOnInit() {
    this.salesForm = this.fb.group({
      accountExecutive: ['JAMES'],
      loginSummary: [true],
      wonQuotation: [true],
      lostQuotation: [true],
      totalQuotation: [true],
      projection: [true],
      salesActivity: [true],
      schedular: [true],
      prospectedClients: [true],
      startDate: [''],
      endDate: ['']
    });
  }

  onGo() {
    // Generates a clean JSON object of all fields
    const payload = {
      action: 'FETCH_SALES_PERIOD_DATA',
      data: this.salesForm.value,
      timestamp: new Date().toISOString()
    };

    console.log('Sales Period Submission JSON:', payload);
    alert('Request gene`rated! Check console for full JSON payload.');
  }
}
