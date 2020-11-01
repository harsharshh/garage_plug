import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {CONTACT_ROUTES} from './contact.route';
import {RouterModule} from '@angular/router';
import {ThemeModule} from '../../@theme/theme.module';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CONTACT_ROUTES),
    ThemeModule,
    SharedModule
  ]
})
export class ContactModule { }
