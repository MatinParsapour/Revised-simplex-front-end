import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantService } from 'src/app/constants/Constant.service';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(protected http: HttpClient,
              protected constant: ConstantService) { }

  post(url: string, data: T): Observable<T> {
    return this.http.post<T>(this.constant.domain + url, data)
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(this.constant.domain + url)
  }
}
