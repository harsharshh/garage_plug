import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {ThemeModule} from '../@theme/theme.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const COMPONENTS = [CardComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [...COMPONENTS],
  entryComponents: []
})
export class SharedModule {
}
