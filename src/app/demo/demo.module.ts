import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './components/demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module'
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    FormsModule,
    DemoRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class DemoModule { }
