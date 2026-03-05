import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-sub-out-coc',
  imports: [],
  templateUrl: './sub-out-coc.html',
  styleUrl: './sub-out-coc.css',
})
export class SubOutCoc {
    isSubCOCShow = signal<boolean>(false)
    // vendorList: string[]=[
    //     "Q Glass 2 LLC",
    //     "A & J Vaccume Glass Inc.",
    //     "Absolute Standards Inc.",
    //     "Absolute stds",
    //     "AccuStandard Inc.",
    //     "AccuTest",
    //     "AccuTest Southwest",
    //     "Adirondack invrionment services",
    //     "Agela Technologies",
    //     "Agilent Technologies",
    //     "air liquid",
    //     "Airgas",
    //     "Alfa Aesar",
        
    // ]
    vendorList = signal([
    { id: 1, name: 'Q Glass 2 LLC' },
    { id: 2, name: 'A & J Vaccume Glass Inc.' },
    { id: 3, name: 'Absolute Standards Inc.' },
    { id: 4, name: 'Absolute stds' },
    { id: 5, name: 'AccuStandard Inc.' },
    { id: 6, name: 'AccuTest' },
    { id: 7, name: 'AccuTest Southwest' },
    { id: 8, name: 'Adirondack invrionment services' },
    { id: 9, name: 'Agela Technologies' },
    { id: 10, name: 'Agilent Technologies' },
    { id: 11, name: 'air liquid' },
    { id: 12, name: 'Airgas' },
    { id: 13, name: 'Alfa Aesar' }
  ])
    goButton(id: any){
      const orderId = id.trim();
      if(!orderId){
        alert("Please enter a valid order ID");
      }
      else{
        // console.log("go button clicked your order id is : ", orderId)
        this.isSubCOCShow.set(true);
      }
    }
    addNewVendor(){
      alert("This page is in development stage, please wait for the next release.")
    }
    processContinue(){
      alert("Sub COC process has been completed successfully! You can now proceed with the next steps.")
    }
}
