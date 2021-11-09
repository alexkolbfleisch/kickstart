import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from 'src/app/model/Training';

const baseUrl = "";

@Injectable({
  providedIn: 'root'
})
export class PostTrainingService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: Training): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  //extra
  update(id: string, data: Training): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
