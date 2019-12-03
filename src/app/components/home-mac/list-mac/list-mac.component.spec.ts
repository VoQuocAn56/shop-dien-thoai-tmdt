import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMacComponent } from './list-mac.component';

describe('ListMacComponent', () => {
  let component: ListMacComponent;
  let fixture: ComponentFixture<ListMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
