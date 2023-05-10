import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: any;
  @Output() addToCartClick = new EventEmitter<any>();

  onClick(): void {
    this.addToCartClick.emit(this.product)
  }

}
