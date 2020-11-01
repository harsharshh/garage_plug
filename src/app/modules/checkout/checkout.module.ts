import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {CHECKOUT_ROUTES} from './checkout.route';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../../@theme/theme.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CHECKOUT_ROUTES),
    ThemeModule,
    SharedModule
  ]
})
export class CheckoutModule {
}
