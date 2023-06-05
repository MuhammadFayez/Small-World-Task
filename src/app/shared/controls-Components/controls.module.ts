import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownComponent } from './drop-down/drop-down.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';
import { MaterialzModule } from '../modules/materialz/materialz.module';


const controlComponets = [
  DropDownComponent,
  InputFieldsComponent
]

@NgModule({
  declarations: [
    controlComponets
  ],
  imports: [
    CommonModule,
    MaterialzModule
  ],
  exports:[controlComponets]
})
export class ControlsModule { }
