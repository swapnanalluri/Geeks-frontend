import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last10transComponent } from './last10trans.component';

describe('Last10transComponent', () => {
  let component: Last10transComponent;
  let fixture: ComponentFixture<Last10transComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last10transComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last10transComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
