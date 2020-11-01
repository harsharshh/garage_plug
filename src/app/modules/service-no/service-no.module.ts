import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceNoComponent } from './service-no.component';
import {SharedModule} from '../../shared/shared.module';
import {ThemeModule} from '../../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {SERVICE_NO_ROUTES} from './service-no.route';



@NgModule({
  declarations: [ServiceNoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICE_NO_ROUTES),
    ThemeModule,
    SharedModule
  ]
})
export class ServiceNoModule { }
