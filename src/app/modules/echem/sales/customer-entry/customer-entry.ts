import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-entry',
  imports: [FormsModule],
  templateUrl: './customer-entry.html',
  styleUrl: './customer-entry.css',
})
export class CustomerEntry {
  customerName: string = '';
  customerId: string = '';
  poRequired: boolean = false;
  selectedPM: string = '';
  selectedSM: string = '';
  selectedAlt: string = '';

  
  managers = signal<string[]>([
    'Carly',
    'Deepak',
    'James',
    'Jordan',
    'Mohammad',
    'Yazmeen'
  ]);

  onAdd() {
    if (!this.customerName.trim() || !this.customerId.trim()) {
      alert('Error: Customer Name and ID are mandatory fields.');
      return;
    }
    const payload = {
      customerName: this.customerName,
      customerId: this.customerId,
      projectManager: this.selectedPM,
      salesManager: this.selectedSM,
      altSalesManager: this.selectedAlt,
      isPoRequired: this.poRequired,
      timestamp: new Date().toISOString()
    };

    console.log('Customer Entry Submitted:', payload);
    this.resetForm();
  }

  private resetForm() {
    this.customerName = '';
    this.customerId = '';
    this.poRequired = false;
    this.selectedPM = '';
    this.selectedSM = '';
    this.selectedAlt = '';
  }
}