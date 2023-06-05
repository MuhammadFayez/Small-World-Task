import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ListFiltersComponent } from './components/list-filters/list-filters.component';
import {MaterialzModule} from './modules/materialz/materialz.module';
import { ControlsModule } from './controls-Components/controls.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductCardComponent } from './product-card/product-card.component';

const sharedComponents = [
  HeaderComponent,
  ListFiltersComponent,
  SidebarComponent,
  ProductCardComponent
]

const sharedModules = [
  MaterialzModule,
  ControlsModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
]

@NgModule({
  declarations: [
    sharedComponents

  ],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports:[
    sharedComponents,
    sharedModules
  ]
})
export class SharedModule { }
