import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlistofaccsComponent } from './custlistofaccs.component';

describe('CustlistofaccsComponent', () => {
  let component: CustlistofaccsComponent;
  let fixture: ComponentFixture<CustlistofaccsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustlistofaccsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustlistofaccsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
