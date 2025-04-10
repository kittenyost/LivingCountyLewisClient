import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  private apiUrl = 'http://localhost:5287/api/listings'; // ✅ Base API URL

  constructor(private http: HttpClient) { }

  // ✅ Fetch all listings
  getListings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ Fetch a single listing by ID
  getListingById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // ✅ Fetch listings by area number (like 426 for Centralia)
  getListingsByArea(areaNumber: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/area/${areaNumber}`);
  }
}
