import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { FeatureComponentsModule } from '../feature-components/feature-components.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeatureComponentsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
