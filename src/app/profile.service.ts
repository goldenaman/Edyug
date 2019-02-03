import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
baseUrl = 'http://127.0.0.1:8000';
httpHeadrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  getProfile(): Observable<any> {
    return this.http.get(this.baseUrl + '/people/' ,
    {headers: this.httpHeadrs});

  }
}
