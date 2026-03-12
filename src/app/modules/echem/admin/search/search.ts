import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  // 1. Signals for date values
  // Defaulting to today's date (2026-03-12)
  fromDate = signal('2026-03-12');
  toDate = signal('2026-03-12');

  // 2. Visibility state
  isDataVisible = signal(false);

  onShowClick() {
    this.isDataVisible.set(true);
    console.log(`Searching from ${this.fromDate()} to ${this.toDate()}`);
  }
}

