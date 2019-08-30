import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEntryComponent } from './customer-entry.component';

describe('CustomerEntryComponent', () => {
  let component: CustomerEntryComponent;
  let fixture: ComponentFixture<CustomerEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
