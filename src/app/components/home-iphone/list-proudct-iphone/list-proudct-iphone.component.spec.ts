import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProudctIphoneComponent } from './list-proudct-iphone.component';

describe('ListProudctIphoneComponent', () => {
  let component: ListProudctIphoneComponent;
  let fixture: ComponentFixture<ListProudctIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProudctIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProudctIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
