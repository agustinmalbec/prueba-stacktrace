import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  model = {
    name: ''
  };

  constructor(private currencySvc: CurrencyService) {

  }
  setCurrency(symbol: string, value: number): void {
    this.currencySvc.setCurrency(symbol, value);
  }
  ngOnInit(): void {

  }

}
