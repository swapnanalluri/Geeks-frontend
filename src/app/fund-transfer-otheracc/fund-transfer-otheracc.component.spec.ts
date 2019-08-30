import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferOtheraccComponent } from './fund-transfer-otheracc.component';

describe('FundTransferOtheraccComponent', () => {
  let component: FundTransferOtheraccComponent;
  let fixture: ComponentFixture<FundTransferOtheraccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransferOtheraccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransferOtheraccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
