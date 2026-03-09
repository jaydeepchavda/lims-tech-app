import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-boaiccbrelation',
  imports: [],
  templateUrl: './boaiccbrelation.html',
  styleUrl: './boaiccbrelation.css',
})
export class BOAICCBRelation {
  isAddCOCShow = signal<boolean>(false)
  cocData = []

  onViewOrderIdChange(id: string) {
    if (id && id.trim() !== '') {
      this.isAddCOCShow.set(true)

    }
    else{
      this.isAddCOCShow.set(false)
    }
  }
  batchCodes= [
    'B2603018'
  ]

 pageData = signal({
    clientId: 'All American Environmental, LLC',
    projectId: '621 Commerce Rd Linden NJ',
    bottleDate: '03/06/2026',
    createdBy: 'Yazmeen',
    deliveryDate: '03/11/26',
    summary: [
      { type: 'Summa Canister 1.4 L', qty: 1, reg: 1 },
      { type: 'Summa Canister 6 L', qty: 2, reg: 24 }
    ],
    details: [
      { id: 101, batchId: 'C2111002', canisterId: '10003', size: '6 L', certId: 'VL038060.D', regId: '10563', regType: '24', vAfter: '-30' },
      { id: 102, batchId: 'C2103006', canisterId: '10006', size: '6 L', certId: 'VL036467.D', regId: '10636', regType: '24', vAfter: '-30' }
      // Add more rows here dynamically
    ]
  });
  onSubmit(){
    alert("add coc completed successfully")
    this.isAddCOCShow.set(false)
  }
}

