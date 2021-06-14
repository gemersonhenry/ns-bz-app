import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NativeScriptAnimationsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './shared/services/config.service';
import { LoggerService } from './shared/services/logger.service';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptAnimationsModule,
    NativeScriptHttpClientModule,
  ],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
  constructor(
    private router: Router,
    private configService: ConfigService,
    private loggerService: LoggerService,
  ){
    this.configService.getAppConfig$()
      .subscribe({
        next: (config) => {
          console.log('SUCCESS: AppModule => getAppConfig');
          this.router.navigate(['home']);
          this.configService.setIfAppIsReady(true);
          this.loggerService.setIfLoggerIsEnabled(config.isLoggerEnable);
        },
        error: () => {
          console.log('ERROR: AppModule => getAppConfig');
          this.configService.setIfAppIsReady(false);
          this.loggerService.setIfLoggerIsEnabled(false);
        }
      });
  }
}
