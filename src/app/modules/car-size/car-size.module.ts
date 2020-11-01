import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarSizeComponent } from './car-size.component';
import {SharedModule} from '../../shared/shared.module';
import {ThemeModule} from '../../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {SIZE_ROUTES} from './car-size.route';



@NgModule({
  declarations: [CarSizeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SIZE_ROUTES),
    ThemeModule,
    SharedModule
  ]
})
export class CarSizeModule { }
