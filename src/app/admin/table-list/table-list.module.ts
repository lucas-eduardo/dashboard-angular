import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableListRoutingModule } from './table-list-routing.module';
import { TableListComponent } from './table-list.component';
import { SharedModuleModule } from 'app/shared-module/shared-module.module';

@NgModule({
  declarations: [TableListComponent],
  imports: [
    CommonModule,
    TableListRoutingModule,
    SharedModuleModule
  ]
})
export class TableListModule { }
