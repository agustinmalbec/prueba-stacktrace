import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { tap } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private productSvc: ProductsService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
    this.addProducts();
  }
  addProducts() {
    this.productSvc.getProducts().pipe(tap(products => {
      this.products = products.results
    })).subscribe()
  }
  addToCart(product: any): void {
    this.shoppingCartSvc.updateCart(product);
  }
}
