import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  public get<Res>(url: string) {
    return this.httpClient.get<Res>(url);
  }

  public post<Req, Res>(url: string, request: Req) {
    return this.httpClient.post<Res>(url, request);
  }
}