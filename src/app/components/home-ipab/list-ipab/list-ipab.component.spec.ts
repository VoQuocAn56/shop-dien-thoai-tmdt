import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIpabComponent } from './list-ipab.component';

describe('ListIpabComponent', () => {
  let component: ListIpabComponent;
  let fixture: ComponentFixture<ListIpabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIpabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIpabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
