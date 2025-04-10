import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = `${environment.apiUrl}/property`; // Update API path

  constructor(private http: HttpClient) { }

  // Get all properties
  getProperties(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single property
  getProperty(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new property
  addProperty(property: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, property).pipe(
      catchError(this.handleError)
    );
  }

  // Update a property
  updateProperty(id: number, property: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, property).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a property
  deleteProperty(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side error occurred:', error.error.message);
    } else {
      console.error(`API returned code ${error.status}, body: `, error.error);
    }
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }
}
