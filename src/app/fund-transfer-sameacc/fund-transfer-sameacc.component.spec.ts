import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferSameaccComponent } from './fund-transfer-sameacc.component';

describe('FundTransferSameaccComponent', () => {
  let component: FundTransferSameaccComponent;
  let fixture: ComponentFixture<FundTransferSameaccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransferSameaccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransferSameaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
