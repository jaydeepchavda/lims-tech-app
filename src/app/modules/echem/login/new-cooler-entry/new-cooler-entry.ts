import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-cooler-entry',
  standalone:true,
  imports: [],
  templateUrl: './new-cooler-entry.html',
  styleUrl: './new-cooler-entry.css',
})
export class NewCoolerEntry {
  orderId: string | null = null;
  CusotmerId: number | string = "GSLT01"
  CusotmerName: string | null = "GSL Trade Inc."
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.orderId = params['orderId'];
    });
  }

  backToCoolerEntryPage() {
    this.router.navigate(
      ['../CoolerEntry'],
      {
        relativeTo: this.route,
        queryParams: { orderId: this.orderId }
      }
    );
  }
  enterCoolerId() {

  }
  viewCoolerReport() {

  }
  viewCoverPage() {
    console.log("View Cover Page clicked for orderId: ", this.orderId);
  }
  updateCoolerEntry() {
    console.log("update the cooler entry for order id:", this.orderId)
  }
}
