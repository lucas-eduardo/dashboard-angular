import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';

@NgModule({
  declarations: [TypographyComponent],
  imports: [
    CommonModule,
    TypographyRoutingModule,
    SharedModuleModule
  ]
})
export class TypographyModule { }
