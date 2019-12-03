import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMacComponent } from './home-mac.component';

describe('HomeMacComponent', () => {
  let component: HomeMacComponent;
  let fixture: ComponentFixture<HomeMacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
