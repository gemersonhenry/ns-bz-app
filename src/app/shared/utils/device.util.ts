import { Injectable } from '@angular/core';
import { isAndroid, isIOS } from '@nativescript/core/platform';

@Injectable({
  providedIn: 'root'
})
export class DeviceUtilService {

  public get isAndroid(): boolean {
    return isAndroid;
  }

  public get isIOS(): boolean {
    return isIOS;
  }
}
