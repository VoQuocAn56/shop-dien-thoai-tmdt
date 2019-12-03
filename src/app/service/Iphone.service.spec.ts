/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IphoneService } from './Iphone.service';

describe('Service: Iphone', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IphoneService]
    });
  });

  it('should ...', inject([IphoneService], (service: IphoneService) => {
    expect(service).toBeTruthy();
  }));
});
