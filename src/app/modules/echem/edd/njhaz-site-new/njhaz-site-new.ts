import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface IQcTypes {
  sam: boolean;
  ms: boolean;
  msd: boolean;
  lcs: boolean;
  lcsd: boolean;
  mb: boolean;
  dup: boolean;
}
@Component({
  selector: 'app-njhaz-site-new',
  imports: [FormsModule,CommonModule],
  templateUrl: './njhaz-site-new.html',
  styleUrl: './njhaz-site-new.css',
})
export class NJHazSiteNew {
  projectCode = signal<string>('');
  
  // Using Record<string, boolean> allows dynamic indexing in the template
  qcTypes = signal<Record<string, boolean>>({
    sam: false, ms: false, msd: false, lcs: false, 
    lcsd: false, mb: false, dup: false
  });

  // Array for the @for loop
  qcKeys = ['sam', 'ms', 'msd', 'lcs', 'lcsd', 'mb', 'dup'];

  paramTypes = signal<Record<string, boolean>>({
    trg: true, surr: false, istd: false, tic: false
  });
  paramKeys = ['trg', 'surr', 'istd', 'tic'];

  convertUnit = signal<boolean>(false);
  selectedMethod = signal<string>('LOD');

  availableTests = signal<string[]>([]);
  selectedTests = signal<string[]>([]);
  availableSamples = signal<string[]>([]);

  getTests() {
    if (!this.projectCode().trim()) {
      alert('Please enter Project!');
      return;
    }
    // Clear samples when getting tests to avoid mixing in the same box
    this.availableSamples.set([]); 
    this.availableTests.set(['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']);
  }

  getSamples() {
    if (!this.projectCode().trim()) {
      alert('Please enter Project Number!!');
      return;
    }
    // Clear tests when getting samples
    this.availableTests.set([]);
    this.availableSamples.set(['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4']);
  }

  moveAllToSelectedRight() {
    // Check if there are tests to move
    if (this.availableTests().length > 0) {
      this.selectedTests.set([...this.selectedTests(), ...this.availableTests()]);
      this.availableTests.set([]);
    } 
    // Check if there are samples to move
    else if (this.availableSamples().length > 0) {
      this.selectedTests.set([...this.selectedTests(), ...this.availableSamples()]);
      this.availableSamples.set([]);
    }
  }

  moveAllToSelectedLeft() {
    // If the selected list has items, we need to know if they were tests or samples 
    // to put them back in the correct "available" signal.
    // For simplicity, we check which action was last performed or just check if we are in "test mode"
    if (this.selectedTests().length > 0) {
       // If you want to put them back where they came from:
       this.availableTests.set([...this.availableTests(), ...this.selectedTests()]);
       this.selectedTests.set([]);
    }
  }
}
