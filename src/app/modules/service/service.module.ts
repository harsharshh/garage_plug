import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import {RouterModule} from '@angular/router';
import {SERVICE_ROUTES} from './service.route';
import {ThemeModule} from '../../@theme/theme.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [ServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICE_ROUTES),
    ThemeModule,
    SharedModule

  ]
})
export class ServiceModule { }
