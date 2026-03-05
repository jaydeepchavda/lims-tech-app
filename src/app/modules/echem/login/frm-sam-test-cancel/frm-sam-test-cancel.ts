import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SampleRow {
  id: number;
  SampleNumber: string;
  customerSampleNumber: string;
  collectDate: string;
  ReceiveDate: string;
  isSelected: boolean; 
}

@Component({
  selector: 'app-frm-sam-test-cancel',
  imports: [],
  templateUrl: './frm-sam-test-cancel.html',
  styleUrl: './frm-sam-test-cancel.css',
})
export class FrmSamTestCancel {
  orderId = ''
  showSampleTestContent = signal<boolean>(false)

  OrderIdList = [
    "R1507",
    "R1480",
    "R1479",
    "R1508",
    "R1509",
    "R1510",
    "R1511",
    "R1512",
    "R1513",
    "R1514",
  ]

SampleData = signal<SampleRow[]>([
    { id: 1, SampleNumber: 'R1507-01', customerSampleNumber: '2034', collectDate: '2/27/2026 12:00:00 AM', ReceiveDate: '2/27/2026 12:00:00 AM', isSelected: false },
    { id: 2, SampleNumber: 'R1507-02', customerSampleNumber: '100225', collectDate: '2/27/2026 12:00:00 AM', ReceiveDate: '2/27/2026 12:00:00 AM', isSelected: false },
    { id: 3, SampleNumber: 'R1507-03', customerSampleNumber: '12726', collectDate: '2/27/2026 12:00:00 AM', ReceiveDate: '2/27/2026 12:00:00 AM', isSelected: false },
    { id: 4, SampleNumber: 'R1507-04', customerSampleNumber: '12826', collectDate: '2/27/2026 12:00:00 AM', ReceiveDate: '2/27/2026 12:00:00 AM', isSelected: false },
  ]);
  onViewOrderIdChange(id : string){
    if(id && id.trim() !== ''){
       this.orderId = id
    }
    else{
      this.orderId = ''
    }
  }
  goButton(){
    if(this.orderId && this.orderId.trim() !== ''){
      this.showSampleTestContent.set(true)         
  }
  else{
    alert("Please enter a valid order ID")
    this.showSampleTestContent.set(false)
  }
}
// 1. Delete Multiple Selected Samples
  deleteSample() {
    this.SampleData.update(data => data.filter(row => !row.isSelected));
    // alert("Multiple data has been deleted successfully")
  }

  // 2. Cancel Process (Hide the whole section)
  cancelSample() {
    this.showSampleTestContent.set(false);
    alert("The process has been terminated ") 
  }

  // 3. Cancel Individual Test (Delete specific row)
  deleteRow(id: number) {
    this.SampleData.update(data => data.filter(row => row.id !== id));
    alert("single data for selected row has been deleted successfully")
  }
}
