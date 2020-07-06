import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl = 'http://localhost/api';
  productos: Producto[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
    	map((res) => {
    		this.productos = res['data'];
    		return this.productos;
    	}),
    	catchError(this.handleError));
  };
  private handleError(error: HttpErrorResponse) {
  	console.log(error);
  	return throwError(error.message);
  }
}
