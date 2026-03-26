import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adrdefault',
  imports: [FormsModule],
  templateUrl: './adrdefault.html',
  styleUrl: './adrdefault.css',
})
export class ADRDefault {
    projectCode = signal<string>('');

}
