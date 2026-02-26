import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-smdefault',
  imports: [ CommonModule,RouterLink],
  templateUrl: './smdefault.html',
  styleUrl: './smdefault.css',
})
export class SMDefault {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) {}

  selectedOrderId: string | null = null; 
  samplesData: any[] = [];
  projectIdList = [
    "R1471",
    "R1470",
    "R1466",
    "R1115",
    "R1116",
    "R1464",
    "R1463",
    "R1462",
    "R1461",
    "R1460",
    "R1459",
    "R1458",
    "R1457",
    "R1456",
    "R1455",
    "Q1397",
    "Q1396",
    "Q1395",
    "Q1394",
    "P3078",
    "P3077",
    "P3076",
    "P3075",
    "P3074",
  ]
  onViewOrder(id: string) {
    if (id && id.trim() !== '') {
      this.selectedOrderId = id;
    }
  }
  loadInitialData(orderId: string) {
    
    this.samplesData = [
      {
        matrix: 'Water',
        sampleNum: `${orderId}-01`,
        customerSample: 'BP-VPB-185-TB-20260217',
        collectDate: '02/12/2026',
        collectTime: '09:00:00',
        containers: 2, 
        comments: '',
        tests: { anions3: true, metalsTal: false, alkalinity: true }
      }
    ];
  }
  onSubmitAllData() {
    console.log('Fetching Updated Data from Form:');
    this.samplesData.forEach(sample => {
      console.log(`Sample ${sample.sampleNum}: Containers = ${sample.containers}, CustomerSample = ${sample.customerSample}`);
    });
    
    console.log('Full Updated JSON:', JSON.stringify(this.samplesData));
  }

  resetView() {
    this.selectedOrderId = null;
  }
}
