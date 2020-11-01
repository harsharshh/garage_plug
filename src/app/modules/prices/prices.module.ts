import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices.component';
import {SharedModule} from '../../shared/shared.module';
import {ThemeModule} from '../../@theme/theme.module';
import {PRICE_ROUTE} from './prices.route';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [PricesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PRICE_ROUTE),
    ThemeModule,
    SharedModule
  ]
})
export class PricesModule { }
