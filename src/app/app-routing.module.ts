import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppPageComponent} from './@theme/layouts/app-page/app-page.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    component: AppPageComponent,
    children: [
      {
        path: 'service',
        loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule),
      },
      {
        path: 'car-size',
        loadChildren: () => import('./modules/car-size/car-size.module').then(m => m.CarSizeModule),
      },
      {
        path: 'price',
        loadChildren: () => import('./modules/prices/prices.module').then(m => m.PricesModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'checkout',
        loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule),
      },
      {
        path: 'service-no',
        loadChildren: () => import('./modules/service-no/service-no.module').then(m => m.ServiceNoModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
