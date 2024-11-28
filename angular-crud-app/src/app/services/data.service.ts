import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../models/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/data';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.apiUrl);
  }

  getById(id: number): Observable<DataModel> {
    return this.http.get<DataModel>(`${this.apiUrl}/${id}`);
  }

  create(data: DataModel): Observable<DataModel> {
    return this.http.post<DataModel>(this.apiUrl, data);
  }

  update(id: number, data: DataModel): Observable<DataModel> {
    return this.http.put<DataModel>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}