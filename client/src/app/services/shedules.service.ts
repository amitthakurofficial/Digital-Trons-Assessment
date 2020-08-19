import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShedulesService {

  constructor(private http : HttpClient) { }

  getAllSlotes():Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/shedule/get');
  }

  updateSlot(request):Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/shedule/update',request);
  }
}
