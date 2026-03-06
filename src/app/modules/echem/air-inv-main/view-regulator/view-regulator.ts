import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-view-regulator',
  standalone: true,
  imports: [],
  templateUrl: './view-regulator.html',
  styleUrl: './view-regulator.css',
})
export class ViewRegulator {
  batchCodeId = ''
  editBatchCodeShows = signal<boolean>(false)
  batchCodes = [
    "R2603004",
    "R2603003",
    "R2603002",
    "R2603001",
    "R2603000",
    "R2602999",
    "R2602998",
    "R2602997",
    "R2602996"
  ]
  batchData = [
      { id: 1, regulatorSize: 50, createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', regularID: 10648 },
      { id: 1, regulatorSize: 50, createdBy: 'SAM', cleaningDate: '2/28/2026', createdDate: '2/27/2026', regularID: 10185 },
      { id: 1, regulatorSize: 50, createdBy: 'SAM', cleaningDate: '3/03/2026', createdDate: '2/27/2026', regularID: 10547 },
      { id: 1, regulatorSize: 50, createdBy: 'SAM', cleaningDate: '2/04/2026', createdDate: '2/27/2026', regularID: 10503 }
    ];
  onViewOrderIdChange(id : string){
    if(id && id.trim() !== ''){
       this.batchCodeId = id
       this.editBatchCodeShows.set(true)
    }
    else{
      this.batchCodeId = ''
      this.editBatchCodeShows.set(false)
    }
  }
  editBatch(){
    if(this.batchCodeId){
      alert('The batch code has been edited successfully')
      console.log(this.batchCodeId)
      this.editBatchCodeShows.set(false)
      return 
    }
    alert("Please select the batch code")
    
  }
}
