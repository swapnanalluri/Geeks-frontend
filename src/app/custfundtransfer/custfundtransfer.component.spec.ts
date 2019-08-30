import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustfundtransferComponent } from './custfundtransfer.component';

describe('CustfundtransferComponent', () => {
  let component: CustfundtransferComponent;
  let fixture: ComponentFixture<CustfundtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustfundtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustfundtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
