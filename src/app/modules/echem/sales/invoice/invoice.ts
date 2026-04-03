import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  imports: [FormsModule],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class Invoice {
invoiceNo = '';
  dateFrom = '';
  dateTo = '';
  selectedPM = 'all';
  selectedExec = 'all';

  managers = signal<string[]>(['Manager 1', 'Manager 2']);
  executives = signal<string[]>(['Exec 1', 'Exec 2']);

  onShow() {
    console.log('Fetching Invoice Data:', {
      no: this.invoiceNo,
      from: this.dateFrom,
      to: this.dateTo,
      pm: this.selectedPM,
      exec: this.selectedExec
    });
  }
}
