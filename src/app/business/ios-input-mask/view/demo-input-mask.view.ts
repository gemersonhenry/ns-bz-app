import { Component } from '@angular/core';
import { DeviceUtilService } from '@utils/device.util';
import { LoggerService } from '@services/logger.service';

export const DELAY = 20;

@Component({
  selector: 'ios-demo-input-mask',
  templateUrl: './demo-input-mask.view.html'
})
export class DemoInputMaskComponent {

  public isIOS = this.deviceUtil.isIOS;

  constructor(
    private deviceUtil: DeviceUtilService,
    private loggerService: LoggerService,
  ) {}
}
