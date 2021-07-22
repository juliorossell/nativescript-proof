import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThridComponentComponent } from './thrid-component/thrid-component.component';
import { RenderDynamicComponentModule } from './shared/dynamic-component.module';
import { DynamicComponentService } from './shared/dynamic-component.service';

@NgModule({
  imports: [
    CommonModule,
    RenderDynamicComponentModule,
  ],
  declarations: [
    DynamicComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThridComponentComponent
  ],
  exports: [
    DynamicComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThridComponentComponent
  ],
  entryComponents: [
    DynamicComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThridComponentComponent
  ],
})
export class DynamicComponentModule { }
