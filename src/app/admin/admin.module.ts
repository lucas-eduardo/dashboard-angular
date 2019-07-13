import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule
  ]
})
export class AdminModule { }
