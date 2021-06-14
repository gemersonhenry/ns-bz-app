import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { IAppConfig } from './../models/app-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private isAppReadySubject = new BehaviorSubject(false);
  public isAppReady$ = this.isAppReadySubject.asObservable();

  public getAppConfig$(): Observable<IAppConfig> {
    const config = {
      isLoggerEnable: true,
    } as IAppConfig;
    return of(config)
      .pipe(delay(2000));
  }

  public setIfAppIsReady(isReady: boolean) {
    this.isAppReadySubject.next(isReady);
  }
}