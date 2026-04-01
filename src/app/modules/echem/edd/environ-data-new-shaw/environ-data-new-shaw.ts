import { Component, Pipe, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-environ-data-new-shaw',
  imports: [FormsModule, RouterLink,],
  templateUrl: './environ-data-new-shaw.html',
  styleUrl: './environ-data-new-shaw.css',
})
export class EnvironDataNewSHAW {
  projectCode = signal<string>('');
  qcTypes = signal<Record<string, boolean>>({
    sam: false, ms: false, msd: false, lcs: false,
    lcsd: false, mb: false, dup: false
  });
  qcKeys = ['sam', 'ms', 'msd', 'lcs', 'lcsd', 'mb', 'dup'];
  selectedMethod = signal<string>('LOD');
  tcisMeed = signal<boolean>(false);
  selectedTests = signal<string[]>([]);
  getTests() {
    if (!this.projectCode().trim()) {
      alert('Please enter Project!');
      return;
    }
    this.availableSamples.set([]);
    this.availableTests.set(['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']);

  }
  getSamples() {
    if (!this.projectCode().trim()) {
      alert('Please enter Project Number!!');
      return;
    }
    this.availableTests.set([]);
    this.availableSamples.set(['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4']);
  }
  availableTests = signal<string[]>([]);
  availableSamples = signal<string[]>([])
  moveAllToSelectedRight() {
    // Check if there are tests to move
    if (this.availableTests().length > 0) {
      this.selectedTests.set([...this.selectedTests(), ...this.availableTests()]);
      this.availableTests.set([]);
    }
    else if (this.availableSamples().length > 0) {
      this.selectedTests.set([...this.selectedTests(), ...this.availableSamples()]);
      this.availableSamples.set([]);
    }
  }
  moveAllToSelectedLeft() {
   if (this.selectedTests().length > 0) {
       this.availableTests.set([...this.availableTests(), ...this.selectedTests()]);
       this.selectedTests.set([]);
    }
  }
}
