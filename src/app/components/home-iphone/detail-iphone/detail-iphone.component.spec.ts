import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailIphoneComponent } from './detail-iphone.component';

describe('DetailIphoneComponent', () => {
  let component: DetailIphoneComponent;
  let fixture: ComponentFixture<DetailIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
