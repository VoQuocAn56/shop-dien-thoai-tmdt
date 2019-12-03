/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IpabService } from './Ipab.service';

describe('Service: Ipab', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpabService]
    });
  });

  it('should ...', inject([IpabService], (service: IpabService) => {
    expect(service).toBeTruthy();
  }));
});
