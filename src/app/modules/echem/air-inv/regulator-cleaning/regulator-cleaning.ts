import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-regulator-cleaning',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './regulator-cleaning.html',
  styleUrl: './regulator-cleaning.css',
})
export class RegulatorCleaning {


regulatorForm: FormGroup;

  // Exact options from your image
  options = [
    '100 [1] [0.2]', '12.5 [8] [2]', '16.67 [6] [1.12]',
    '2.9 [NA] [8]', '200 [0.5] [0.1]', '25 [4] [1]',
    '300 [NA] [0.07]', '4.16 [24] [6]', '400 [0.25] [0.05]',
    '50 [2] [0.5]', '600 [NA] [.03]', '70 [1.25] [.25]',
    '857.14 [0.1] [0]'
  ];

  constructor(private fb: FormBuilder) {
    this.regulatorForm = this.fb.group({
      regulators: this.fb.array(this.options.map(() => new FormControl(false))),
      batchId: ['R2603001'],
      cleaningDate: ['03/03/2026 0:14']
    });
  }

  get regulatorsArray() {
    return this.regulatorForm.get('regulators') as FormArray;
  }

  onNext() {
    const selected = this.regulatorForm.value.regulators
      .map((checked: boolean, i: number) => checked ? this.options[i] : null)
      .filter((v: any) => v !== null);

    console.log("Next Process Data:", {
      selectedRegulators: selected,
      batchId: this.regulatorForm.value.batchId,
      date: this.regulatorForm.value.cleaningDate
    });
  }
}