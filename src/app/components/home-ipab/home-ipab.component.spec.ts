import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIpabComponent } from './home-ipab.component';

describe('HomeIpabComponent', () => {
  let component: HomeIpabComponent;
  let fixture: ComponentFixture<HomeIpabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIpabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIpabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
