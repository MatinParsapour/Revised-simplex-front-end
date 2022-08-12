import { ConstantService } from './../../constants/Constant.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService extends DataService<FormData> {
  override http: HttpClient;
  override constant: ConstantService;

  constructor(http: HttpClient, constant: ConstantService) {
    super(http, constant);
    this.http = http;
    this.constant = constant;
  }

  override get(url: string): Observable<any> {
    return this.http.get<any>(this.constant.domain + url);
  }

  override post(url: string, data: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.constant.domain + url, data);
  }
}
