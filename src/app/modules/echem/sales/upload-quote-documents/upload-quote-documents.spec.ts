import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQuoteDocuments } from './upload-quote-documents';

describe('UploadQuoteDocuments', () => {
  let component: UploadQuoteDocuments;
  let fixture: ComponentFixture<UploadQuoteDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadQuoteDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadQuoteDocuments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
