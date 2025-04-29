import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Partner } from '../models/partner.model';

@Injectable({ providedIn: 'root' })
export class PartnerService {
  private apiUrl = 'https://mockanapi.com/s/67ae1b3403f9ffca6f47eb79/partners?mock_delay=5000';

  constructor(private http: HttpClient) {}

  getPartners(): Observable<Partner[]> {
    return this.http.get<{ [key: string]: Partner }>(this.apiUrl).pipe(
      map(data => Object.values(data)), 
      catchError(error => {
        console.error('API error:', error);
        return throwError(() => new Error('Failed to load partner data'));
      })
    );
  }
}
