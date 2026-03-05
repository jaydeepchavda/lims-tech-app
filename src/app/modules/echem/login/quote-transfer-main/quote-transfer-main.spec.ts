import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTransferMain } from './quote-transfer-main';

describe('QuoteTransferMain', () => {
  let component: QuoteTransferMain;
  let fixture: ComponentFixture<QuoteTransferMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteTransferMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteTransferMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
