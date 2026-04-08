import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-send-out',
  imports: [FormsModule],
  templateUrl: './project-send-out.html',
  styleUrl: './project-send-out.css',
})
export class ProjectSendOut {
  projectNo = '';
  dateFrom = '';
  dateTo = '';
  selectedPM = 'all';
  selectedExec = 'all';

  managers = signal<string[]>(['Manager 1', 'Manager 2']);
  executives = signal<string[]>(['Exec 1', 'Exec 2']);

  onShow() {
    console.log('Fetching Project Send OutData:', {
      no: this.projectNo,
      from: this.dateFrom,
      to: this.dateTo,
      pm: this.selectedPM,
      exec: this.selectedExec
    });
  }
}
