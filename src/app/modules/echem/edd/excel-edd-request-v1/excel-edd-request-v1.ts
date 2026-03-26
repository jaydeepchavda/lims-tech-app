import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-excel-edd-request-v1',
  imports: [FormsModule, CommonModule],
  templateUrl: './excel-edd-request-v1.html',
  styleUrl: './excel-edd-request-v1.css',
})
export class ExcelEddRequestV1 {
  isExcelEddDataShow = signal<boolean>(false)

  customerIds = signal<string[]>(['100G01', '101F01', '3DEN01']);
  projects = signal<string[]>(['36182', '36496', '36794']);
  orderId = signal<string>('')
  selectedCustomerId = '';
  selectedProject = '';
  selectedOrderId = '';

  // goToNext() {
  //   if (!this.selectedCustomerId) {
  //     alert('Please select a Customer ID');
  //     return;
  //   }
  //   console.log('Navigating with:', {
  //     customer: this.selectedCustomerId,
  //     project: this.selectedProject,
  //     order: this.selectedOrderId
  //   });
  //   this.isExcelEddDataShow.set(true)
  // }
  // Add these to your class properties
  // isExcelEddDataShow = signal<boolean>(false);
  projectCode = signal<string>('');
  systems = ['Metals', 'Semi-VOA', 'VOA', 'Pesticides', 'GenChem'];
  selectedSystems = signal<Record<string, boolean>>({
    'Metals': false, 'Semi-VOA': false, 'VOA': false, 'Pesticides': false, 'GenChem': false
  });

  // Update your goToNext to toggle the view
  goToNext() {
    if (this.selectedCustomerId || this.selectedOrderId) {
      this.isExcelEddDataShow.set(true);
    } else {
      alert('Please select a Customer or enter Order ID');
    }
  }

  getTests() {
    console.log('Fetching tests for:', this.projectCode());
  }

}
