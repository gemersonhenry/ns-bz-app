import { NgModule } from '@angular/core';
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DemoInputMaskComponent } from './view/demo-input-mask.view';

const routes: Routes = [
  { path: '', component: DemoInputMaskComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class DemoInputMaskRoutingModule {}
