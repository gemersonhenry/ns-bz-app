import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { DemoInputMaskRoutingModule } from './ios-input-mask-routing.module';
import { DemoInputMaskComponent } from './view/demo-input-mask.view';

@NgModule({
  imports: [
    DemoInputMaskRoutingModule,
    NativeScriptCommonModule,
  ],
  declarations: [
    DemoInputMaskComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class IosInputMaskModule {}
