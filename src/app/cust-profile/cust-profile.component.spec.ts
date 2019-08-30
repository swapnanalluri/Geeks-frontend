import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustProfileComponent } from './cust-profile.component';

describe('CustProfileComponent', () => {
  let component: CustProfileComponent;
  let fixture: ComponentFixture<CustProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
