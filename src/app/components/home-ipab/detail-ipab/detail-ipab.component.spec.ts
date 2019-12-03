import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIpabComponent } from './detail-ipab.component';

describe('DetailIpabComponent', () => {
  let component: DetailIpabComponent;
  let fixture: ComponentFixture<DetailIpabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIpabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIpabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
