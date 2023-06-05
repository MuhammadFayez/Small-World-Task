import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentListComponent } from './agent-list/agent-list.component';
import { SharedModule } from '../shared/shared.module';
import { PhaseResultsComponent } from './phase-results/phase-results.component';

const featureComponents = [
  AgentListComponent,
  PhaseResultsComponent
]


@NgModule({
  declarations: [
    featureComponents
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    featureComponents
  ]
})
export class FeatureComponentsModule { }
