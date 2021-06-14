import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private loggerKey = 'LoggerService';
  private isEnabled = false;

  public log(message: string, o?: object) {
    if (this.isEnabled) {
      console.log(`***** ${this.loggerKey} => ${message} *****`, o);
    }
  }

  public setIfLoggerIsEnabled(isEnabled: boolean): void {
    this.isEnabled = isEnabled;
  }
}