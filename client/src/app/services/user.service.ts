import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(request):Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/user/add',request)
  }

  getUser(request):Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/user/get/'+request)
  }

  updateUser(request):Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/user/update',request)
  }
}
