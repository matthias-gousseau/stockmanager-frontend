import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('Product', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        provideHttpClient(),        // injecter HttpClient
        provideHttpClientTesting(), // remplacer HttpClient par le mock
        provideRouter([])           // injecter Router vide
      ]
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
