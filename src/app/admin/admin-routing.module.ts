import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' },
  { path: 'table-list', loadChildren: './table-list/table-list.module#TableListModule' },
  { path: 'typography', loadChildren: './typography/typography.module#TypographyModule' },
  { path: 'icons', loadChildren: './icons/icons.module#IconsModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
