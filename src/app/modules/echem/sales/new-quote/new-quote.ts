import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  imports: [FormsModule],
  templateUrl: './new-quote.html',
  styleUrl: './new-quote.css',
})
export class NewQuote {
  quoteId = signal('Q2604024');
  status = signal('Pending');
  discount = signal(0);
  quoteDate = signal(new Date().toLocaleString());
  priority = signal('10 Bus. Days');
  comments = signal('');
  projAddress = signal('');
  clientId = signal('100G01');
  clientContact = signal('EECR01');
  billingId = signal('100G01');
  billingName= signal('Wayne');
  billingContact = signal('EECR01');
  projectId = signal('100-124');
  poNumber = signal('');

  // Optimized Signal Data for Dropdowns
  statusOptions = signal(['Pending', 'Won', 'Lost']);
  priorityOptions = signal(['1 Bus. Days', '2 bus. days', '10 Bus. Days', '15 Bus. Days']);
  
  clientOptions = signal([
    { id: '100G01', label: '100G01--Wayne--Hicksville--NY' },
    { id: '200F05', label: '200F05--Gotham--Brooklyn--NY' }
  ]);

  contactOptions = signal(['EECR01', 'EECR02', 'EECR03']);
  projectOptions = signal([
    { id: '100-124', label: '100-124 Glen Cove Road' },
    { id: '505-888', label: '505-888 Liberty Avenue' }
  ]);
  billingOptions = signal([
    { id: '100G01' },
    { id: '200F05' }
  ]);
  onAddQuote() {
    const payload = {
      quoteId: this.quoteId(),
      status: this.status(),
      client: this.clientId()
    };
    console.log('Quotation Saved:', payload);
  }

  onCancel() {
    if(confirm('Are you sure you want to cancel this quote?')) {
      console.log('Process Cancelled');
    }
  }
}
