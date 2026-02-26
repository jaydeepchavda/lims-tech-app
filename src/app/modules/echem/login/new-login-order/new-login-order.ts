import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-login-order',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-login-order.html',
  styleUrl: './new-login-order.css',
})
export class NewLoginOrder {
  private fb = inject(FormBuilder);
  orderForm = this.fb.group({
    orderId: ['R1414'],
    orderDate: ['2/19/2026 3:55:44 AM'],
    priority: ['10 Bus. Days'],
    poNumber: ['yes'],
    poValue: ['123'],
    comments: [''],
    testComment: ['100-124 Glen Cove Rd. Sample Pick up supported by'],
    customerId: ['110G01--wayne--Hicksville--NY', Validators.required],
    customerName: ['Wayne'],
    invoiceTypes: this.fb.group({
      basic: [true],
      details: [false],
      hardCopy: [false],
      cocReq: [false],
    }),

    customerContacts: ['EECR01'],
    billingContacts: ['EECR01'],
    projectId: ['45279'],
    quotationType: this.fb.group({
      type: ['quotation']
    }),
    eddFormats: this.fb.group({
      eddFormat1: [''],
      eddFormat2: [''],
      eddFormat3: [''],
      eddFormat4: [''],
      eddFormat5: [''],
      eddFormat6: [''],
      eddFormat7: [''],
      eddFormat8: [''],
      eddFormat9: [''],
      eddFormat10: [''],
      eddFormat11: [''],
      eddFormat12: [''],

    }),
    criterias: this.fb.group({
      criteria1: ['NONE'],
      criteria2: ['NONE'],
      criteria3: ['NONE'],
      criteria4: ['NONE'],
      criteria5: ['NONE'],
      criteria6: ['NONE'],
      criteria7: ['NONE'],
      criteria8: ['NONE'],
      criteria9: ['NONE'],
      criteria10: ['NONE'],
      criteria11: ['NONE'],
      criteria12: ['NONE'],
    }),
    dataPackageTypes: ['Results Only'],
    pmComments: [''],
    crComments: [''],
    subProjects: [true],
    eddCommentTypes: this.fb.group({
      eddComments: [true],
      testComments: [false],
      pmComments: [false],
      crComments: [false]

    }),
    commentsDataTypes: this.fb.group({
      regular: [true],
      DOD: [true],
      NJDKQP: [true]
    }),
    dataProcessTypes: ['regular']
  });

  PriorityList: string[] = [
    '10 Bus. Days',
    '5 Bus. Days',
    '3 Bus. Days',
    'Rush',
  ];

  CustomerIdList: string[] = [
    '110G01--wayne--Hicksville--NY',
    '110G02--john--NewYork--NY',
    '110G03--alice--Boston--MA',
  ];
  CustomerContactList: string[] = [
    'EECR01',
    'Emanuel Hedvet',
    'Kevin Kleaka',
    'testing',
  ]

  projectIdList: string[] = [
    '45279',
    '100-124 Glen Cove Road',
    'Pazak',
    '47181',
    'Case#33181',
    '37179'
  ]

  eddFormatList: string[] = [
    'ADAPT',
    'ADAR',
    'BAKER',
    'BBL',
    'BML',
    'EAEST',
    'EPA CLP',
    'EQUIS',
    'EXCEL PA',
    'ERIS',
    'ENVIRONDATA',
  ]
  criteriaList: string[] = [
    'NONE',
    'Criteria A',
    'Criteria B',
    'Criteria C'
  ]

  dataTypesList: string[] = [
    'Analytical summary 1',
    'Analytical summary 2',
    'CLP',
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "NYS ASP A",
    "NYS ASP B",
  ]

  onSubmit() {
    console.log(this.orderForm.getRawValue());
  }
}
