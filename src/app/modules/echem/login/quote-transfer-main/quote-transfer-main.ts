import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quote-transfer-main',
  imports: [],
  templateUrl: './quote-transfer-main.html',
  styleUrl: './quote-transfer-main.css',
})
export class QuoteTransferMain {
  quoteId: string = ''
  customerID: string = "HOME01"
  customerName = "Homeowner"
  projectID = "Banton Tools"
  SalesContact = "Yazmeen"
  QuoteIdList = [
    "Q2601108",
    "Q2601109",
    "Q2601110",
    "Q2601111",
    "Q2602099",
    "Q2602100",
    "Q2602101"
  ]

  selectedQuoteId = signal<boolean>(false);


  onViewQuoteIdChange(id: any) {
    if (id && id.trim() !== '') {
      this.selectedQuoteId.set(true);
      this.quoteId = id
    }
    else {
      this.selectedQuoteId.set(false);
      this.quoteId = id

    }
  }
  onChangeBD() {
    alert(" BD for this project successfully changed")
    this.quoteId = ''
    this.selectedQuoteId.set(false)
  }
  transferAllPriorities() {
    alert("Transfer all priorities successfully completed")
    this.quoteId = ''
    this.selectedQuoteId.set(false)
  }
  transferQuotePriorities() {

    alert("Transfer quote priorities successfully completed")
    this.quoteId = ''
    this.selectedQuoteId.set(false)
  }

}
