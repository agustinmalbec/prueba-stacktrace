import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { CurrencyChangePipe } from 'src/app/shared/pipe/currency.pipe';



@NgModule({
  declarations: [
    CheckoutComponent,
    DetailsComponent,
    CurrencyChangePipe
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CheckoutModule { }
