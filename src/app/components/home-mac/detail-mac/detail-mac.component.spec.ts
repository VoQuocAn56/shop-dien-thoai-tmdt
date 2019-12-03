import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMacComponent } from './detail-mac.component';

describe('DetailMacComponent', () => {
  let component: DetailMacComponent;
  let fixture: ComponentFixture<DetailMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
