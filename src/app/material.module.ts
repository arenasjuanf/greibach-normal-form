import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material';


const modules = [
  NoopAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatButtonModule,
  MatExpansionModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],exports: modules
})
export class MaterialModule { }
