import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StockInventoryService } from './stock-inventory.service';

const cartItems = [
  { product_id: 1, quantity: 10 },
  { product_id: 2, quantity: 5 },
];
const productItems = [
  { id: 1, price: 10, name: 'Test' },
  { id: 2, price: 100, name: 'Another Test' },
];

fdescribe('StockInventory2Service', () => {
  let service: StockInventoryService;
  let http: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(StockInventoryService);
    http = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cart items', () => {
    service.getCartItems().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(cartItems);
    });

    const req = httpTestingController.expectOne('/api/cart');
    expect(req.request.method).toEqual('GET');
    req.flush(cartItems);
    httpTestingController.verify();
  });

  it('should get product items', () => {
    service.getProducts().subscribe((result) => {
      expect(result.length).toBe(2);
      expect(result).toEqual(productItems);
    });

    const req = httpTestingController.expectOne('/api/products');
    expect(req.request.method).toEqual('GET');
    req.flush(productItems);
    httpTestingController.verify();
  });
});
