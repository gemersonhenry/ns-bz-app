import { Component } from '@angular/core';
import { EventData, Image } from '@nativescript/core';
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

  public onImageLoaded($event: EventData) {
    this.loggerService.log('onImageLoaded triggered');
    setTimeout(() => {
      if (this.isIOS) {
        const image = $event.object as Image;
        const uiImage = image.ios;

        // [imageView sd_setImageWithURL:[NSURL URLWithString:@"http://www.domain.com/path/to/image.jpg"]
        uiImage.sd_setImageWithURL(
          NSURL.URLWithString('https://media.giphy.com/media/tsX3YMWYzDPjAARfeg/giphy.gif')
        );
      } else {
        this.loggerService.log('gif not is loading because this platform is android');
      }
    }, DELAY);
  }
}
