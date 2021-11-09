import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from '../../model/Trainer';

const baseUrl = "";

@Injectable({
  providedIn: 'root'
})
export class PostTrainerService {

  constructor(private http: HttpClient) { }


  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Trainer): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //extra
  update(id: string, data: Trainer): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
