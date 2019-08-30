import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusttranshistoryComponent } from './custtranshistory.component';

describe('CusttranshistoryComponent', () => {
  let component: CusttranshistoryComponent;
  let fixture: ComponentFixture<CusttranshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusttranshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusttranshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
