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

  search(field: string, row: string): Observable<Producto[]> {
    return this.http.get(
    	`${this.baseUrl}/search?field=${field}&row=${row}`
    	).pipe(map((res) => {
    		this.productos = res['data'];
    		return this.productos;
    	}),
    	catchError(this.handleError));
  };

  searchAll(): Observable<Producto[]> {
    return this.http.get(`${this.baseUrl}/search`).pipe(map((res) => {
    		this.productos = res['data'];
    		return this.productos;
    	}),
    	catchError(this.handleError));
  };

  get(id: number): Observable<Producto> {
    return this.http.get(`${this.baseUrl}/details?id=${id}`)
    .pipe(
    	map((res) => {
    		this.productos = res['data'];
    		return this.productos[0];
    	}),
    	catchError(this.handleError));
  };

  addToCart(id: number, qty: number): Observable<Producto> {
  	return this.http.post<Producto>(`${this.baseUrl}/addToCart`, {data: id, qty})
  	.pipe(
  		catchError(this.handleError)
  	);
  }

  private handleError(error: HttpErrorResponse) {
  	console.log(error);
  	return throwError(error.message);
  }
}
