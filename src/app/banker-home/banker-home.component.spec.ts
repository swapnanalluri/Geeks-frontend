import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerHomeComponent } from './banker-home.component';

describe('BankerHomeComponent', () => {
  let component: BankerHomeComponent;
  let fixture: ComponentFixture<BankerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
