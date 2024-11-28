import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/Owner.model';
import { OwnerForCreation } from '../models/OwnerForCreation.model';


@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  private readonly apiUrl = 'https://localhost:7151/api/owners'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAllOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  getOwnerById(ownerId: string): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/${ownerId}`);
  }

  createOwner(owner: OwnerForCreation): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }

  updateOwner(ownerId: string, owner: OwnerForCreation): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${ownerId}`, owner);
  }

  deleteOwner(ownerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${ownerId}`);
  }
}
