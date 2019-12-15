/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductInfoService } from './productInfo.service';

describe('Service: ProductInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductInfoService]
    });
  });

  it('should ...', inject([ProductInfoService], (service: ProductInfoService) => {
    expect(service).toBeTruthy();
  }));
});
