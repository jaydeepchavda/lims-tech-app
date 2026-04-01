import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-result-excel-edd',
  imports: [FormsModule],
  templateUrl: './result-excel-edd.html',
  styleUrl: './result-excel-edd.css',
})
export class ResultExcelEDD {
// isSampleOrTestAvailable = signal<boolean>(true) 
  orderId = signal<string>('');
  
  availableTests = signal<string[]>([]);
  availableSamples = signal<string[]>([]);
  selectedItems = signal<string[]>([]);

  // Merged list for the left box
  availableList = computed(() => [...this.availableTests(), ...this.availableSamples()]);

  // Controls visibility of the 4-box section
  isSampleOrTestAvailable = computed(() => 
    this.availableList().length > 0 || this.selectedItems().length > 0
  );

  getTests() {
    if (!this.orderId().trim()) { alert('Please enter Order ID!'); return; }
    this.availableSamples.set([]); 
    this.availableTests.set(['Test-A', 'Test-B', 'Test-C', 'Test-D','Test-E', 'Test-F', 'Test-G', 'Test-H', 'Test-I', 'Test-J']);
  }

  getSamples() {
    if (!this.orderId().trim()) { alert('Please enter Order ID!'); return; }
    this.availableTests.set([]); 
    this.availableSamples.set(['Sample-001', 'Sample-002', 'Sample-003', 'Sample-004','Sample-005', 'Sample-006', 'Sample-007', 'Sample-008', 'Sample-009', 'Sample-010']);
  }

  moveAllToSelectedRight() {
    this.selectedItems.set([...this.selectedItems(), ...this.availableList()]);
    this.availableTests.set([]);
    this.availableSamples.set([]);
  }

  moveAllToSelectedLeft() {
    // For now, moves everything back to Tests by default
    this.availableTests.set([...this.availableTests(), ...this.selectedItems()]);
    this.selectedItems.set([]);
  }
  getTestsSecond(){
    
  }
}
