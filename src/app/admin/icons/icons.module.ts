import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';

@NgModule({
  declarations: [IconsComponent],
  imports: [
    CommonModule,
    IconsRoutingModule,
    SharedModuleModule
  ]
})
export class IconsModule { }
