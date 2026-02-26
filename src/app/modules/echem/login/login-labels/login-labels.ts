import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-labels',
  imports: [FormsModule,CommonModule],
  templateUrl: './login-labels.html',
  styleUrl: './login-labels.css',
})
export class LoginLabels {
 // Data Lists
  availableOrders = signal<string[]>(['R1481 - (02/25/2026)', 'R1480 - (02/25/2026)', 'R1479 - (02/25/2026)', 'R1478 - (02/25/2026)']);
  selectedOrders = signal<string[]>([]);
  
  // Highlighting/Selection Tracking
  leftSelectedItems = signal<string[]>([]);
  rightSelectedItems = signal<string[]>([]);
  
  manualInput = signal('');

  // Move Highlighed Items to Right (>)
  moveRight() {
    const toMove = this.leftSelectedItems();
    if (toMove.length === 0) return;
    
    this.selectedOrders.update(current => [...current, ...toMove]);
    this.availableOrders.update(current => current.filter(item => !toMove.includes(item)));
    this.leftSelectedItems.set([]); // Clear selection after move
  }

  // Move All to Right (>>)
  moveAllRight() {
    this.selectedOrders.update(current => [...current, ...this.availableOrders()]);
    this.availableOrders.set([]);
  }

  // Move Highlighed Items to Left (<)

  moveLeft() {
    const toMove = this.rightSelectedItems();
    if (toMove.length === 0) return;

    this.availableOrders.update(current => [...current, ...toMove]);
    this.selectedOrders.update(current => current.filter(item => !toMove.includes(item)));
    this.rightSelectedItems.set([]);
  }

  addManual() {
    if (this.manualInput().trim()) {
      this.selectedOrders.update(current => [...current, `${this.manualInput()} - (Manual)`]);
      this.manualInput.set('');
    }
  }
  moveAllLeft(){
    
  }
}