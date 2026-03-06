import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-can-reg-view-cleaning-batch',
  imports: [],
  templateUrl: './can-reg-view-cleaning-batch.html',
  styleUrl: './can-reg-view-cleaning-batch.css',
})
export class CanRegViewCleaningBatch {
  editBatchCodeShows = signal<boolean>(false)
  batchCodeId = ''
  batchCodes =[
    'C2602011',
    'C2602012',
    'C2602013',
    'C2602014',
    'C2602015',
    'C2602016',
    'C2602017',
    'C2602018',
    'C2602019',
    'C2602020',
    'C2602021',
    'C2602022',
    'C2602023',
    'C2602024',
    'C2602025',
  ]
  batchData=[
    { id: 1, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10334 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 2, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10258 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 3, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10443 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 4, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10279 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 5, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10446 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 6, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10448 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
    { id: 7, canSize: '6L', createdBy: 'SAM', cleaningDate: '2/27/2026', createdDate: '2/27/2026', canisterID: 10320 , VAfterClean:'ok',	VAC_Date:"ok",	AnalysisDate:"ok",	VAfter24:"ok ",	VA24_Date:"ok ",	batchCertified:"batch",	certificationID:"ok "},
  ]
  onViewOrderIdChange(id : string){
    if(id && id.trim() !== ''){
       this.editBatchCodeShows.set(true)
       this.batchCodeId = id
    } 
    else{
      this.editBatchCodeShows.set(false)
      this.batchCodeId = ''
    }
  }
  editBatch(){
    if(this.batchCodeId && this.batchCodeId.trim() !== ''){
      alert('The batch code has been edited successfully')
      console.log(this.batchCodeId)
    }else{
      alert('Please select the batch code id')
      this.editBatchCodeShows.set(false)

    }
  }
}
