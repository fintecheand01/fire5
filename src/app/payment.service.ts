import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
  stripe = Stripe('pk_test_2siNPrtZsTgaxKCrV3lP9iZJ');
  constructor() { }

}
