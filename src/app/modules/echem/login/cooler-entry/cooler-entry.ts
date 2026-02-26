import { CommonModule,  } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cooler-entry',
  imports: [CommonModule],
  templateUrl: './cooler-entry.html',
  styleUrl: './cooler-entry.css',
})
export class CoolerEntry {

  constructor(private router: Router, private route: ActivatedRoute){}

 isShowNewCoolerEntry = signal<boolean>(false);

 isShowCoolerEntry = signal<boolean> (false)

  selectedOrderId: string | null = null;
  newCoolerEntryId: string | null = null;
  newOrderDate = new Date();
  
  projectIdList = [
    "R1471",
    "R1470",
    "R1466",
    "R1115",
    "R1116",
    "R1464",
    "R1463",
    "R1462",
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
  onOrderIdChange(id: string) {
    if (id && id.trim() !== '') {
      this.selectedOrderId = id;
      this.isShowCoolerEntry.set(true);
    } else {
      this.selectedOrderId = null;
      this.isShowCoolerEntry.set(false);
    }
  }
 newCollerEntryShow() {
    this.newCoolerEntryId = this.selectedOrderId 
      ? this.selectedOrderId + "1" 
      : "NEW-ENTRY";
    this.isShowNewCoolerEntry.set(true);
  }
  newCoolerEntryHide() {
    this.isShowNewCoolerEntry.set(false);
    this.newCoolerEntryId = null; 
  }
  
  processOrder() {
  if (!this.selectedOrderId) {
    alert('Please select Order ID');
    return;
  }

  this.router.navigate(
    ['../newCoolerEntry'],
    {
      relativeTo: this.route,
      queryParams: { orderId: this.selectedOrderId }
    }
  );
}
}
