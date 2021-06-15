import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './view/home.view';


@NgModule({
  imports: [
    HomeRoutingModule, NativeScriptCommonModule
  ],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
