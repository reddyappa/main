import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Matarial from '@angular/material';

const material=[
  Matarial.MatToolbarModule,
  Matarial.MatCardModule,
  Matarial.MatButtonModule,
  Matarial.MatIconModule,
  Matarial.MatFormFieldModule,
  Matarial.MatInputModule,
  Matarial.MatTableModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
