import { Component } from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  total$ = this.shoppingCartSvr.totalAction$;
  cart$ = this.shoppingCartSvr.cartAction$;
  constructor(private shoppingCartSvr: ShoppingCartService) {

  }

}
