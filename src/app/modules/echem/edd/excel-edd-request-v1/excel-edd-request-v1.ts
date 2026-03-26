import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excel-edd-request-v1',
  imports: [FormsModule,CommonModule],
  templateUrl: './excel-edd-request-v1.html',
  styleUrl: './excel-edd-request-v1.css',
})
export class ExcelEddRequestV1 { 
   customerIds = signal<string[]>(['CUST-001', 'CUST-002', 'CUST-003']);
  projects = signal<string[]>(['LimsArch', 'HazSite-New', 'Project-Delta']);
  orderIds = signal<string[]>(['ORD-9901', 'ORD-9902', 'ORD-9903']);

  // Selected Values
  selectedCustomerId = '';
  selectedProject = '';
  selectedOrderId = '';

  goToNext() {
    // Basic logic to ensure at least one path is selected
    if (!this.selectedCustomerId) {
      alert('Please select a Customer ID');
      return;
    }
    
    console.log('Navigating with:', {
      customer: this.selectedCustomerId,
      project: this.selectedProject,
      order: this.selectedOrderId
    });
  }

}
