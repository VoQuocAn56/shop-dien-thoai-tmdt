/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeIphoneComponent } from './home-iphone.component';

describe('HomeIphoneComponent', () => {
  let component: HomeIphoneComponent;
  let fixture: ComponentFixture<HomeIphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeIphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
