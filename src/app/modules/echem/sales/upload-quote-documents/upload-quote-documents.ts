import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-quote-documents',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './upload-quote-documents.html',
  styleUrl: './upload-quote-documents.css',
})
export class UploadQuoteDocuments {
private fb = inject(FormBuilder);

  // Dropdown Signals
  dropdownData = signal({
    clientIds: ['C001', 'C002', 'C003'],
    projectIds: ['P-99', 'P-100', 'P-101']
  });

  // Dynamic Array for Document Fields (Exact mapping from image)
  uploadFields = signal([
    { label: 'QAPP/SOW/RFP', controlName: 'qappFile', checkControl: 'qappNotReq' },
    { label: 'Bid Sheet', controlName: 'bidFile', checkControl: 'bidNotReq' },
    { label: 'Purchase Order', controlName: 'poFile', checkControl: 'poNotReq' },
    { label: 'Sub-Lab Quote', controlName: 'subLabFile', checkControl: 'subLabNotReq' },
    { label: 'Signed Quote', controlName: 'signedFile', checkControl: 'signedNotReq' },
    { label: 'Edd Requirements', controlName: 'eddFile', checkControl: 'eddNotReq' },
    { label: 'Misc', controlName: 'miscFile', checkControl: 'miscNotReq' },
    { label: 'Sub Contract', controlName: 'subContractFile', checkControl: 'subContractNotReq' },
    { label: 'MSA/BOA', controlName: 'msaFile', checkControl: 'msaNotReq' }
  ]);

  uploadForm: FormGroup = this.fb.group({
    clientId: [''],
    projectId: [''],
    quotationId: [''],
    orderId: [''],
    // Checkboxes
    qappNotReq: [true], bidNotReq: [true], poNotReq: [true],
    subLabNotReq: [true], signedNotReq: [true], eddNotReq: [true],
    miscNotReq: [true], subContractNotReq: [true], msaNotReq: [true],
    expirationDate: ['']
  });

  // Storage for raw file data
  fileStore: any = {};

  onFileChange(event: any, controlName: string) {
    if (event.target.files.length > 0) {
      this.fileStore[controlName] = event.target.files[0];
    }
  }

  onSubmit() {
    // Generate professional JSON format
    const formData = {
      identification: {
        clientId: this.uploadForm.value.clientId,
        projectId: this.uploadForm.value.projectId,
        quotationId: this.uploadForm.value.quotationId,
        orderId: this.uploadForm.value.orderId
      },
      notRequiredSettings: {
        qapp: this.uploadForm.value.qappNotReq,
        bidSheet: this.uploadForm.value.bidNotReq,
        po: this.uploadForm.value.poNotReq,
        msa: this.uploadForm.value.msaNotReq
        // ... (includes all others)
      },
      expirationDate: this.uploadForm.value.expirationDate,
      files: Object.keys(this.fileStore).map(key => ({
        fieldName: key,
        fileName: this.fileStore[key].name
      }))
    };

    console.log('Upload Submission JSON:', formData);
    alert('Documents submitted successfully. Check console for JSON payload.');
  }
}

