import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AccountDto {
  id: string;
  ownerId: string;
  dateCreated: Date;
  accountType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private baseUrl = 'https://your-api-domain/api/accounts'; // Update with actual API URL

  constructor(private http: HttpClient) {}

  getAccounts(ownerId: string): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(`${this.baseUrl}?ownerId=${ownerId}`);
  }
}
