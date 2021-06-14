import { Component } from '@angular/core';
import { View } from '@nativescript/core';

import { ConfigService } from './shared/services/config.service';
import { LoggerService } from './shared/services/logger.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  public isAppReady$ = this.configService.isAppReady$;
  intro: View;

  constructor(
    private configService: ConfigService,
    private loggerService: LoggerService,
  ) {}

  loadedIntro(args) {
    this.loggerService.log('loadedIntro: ', args);
    this.intro = args.object;
  }
}
