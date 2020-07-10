import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ItemCarrito } from './carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
	baseUrl = 'http://localhost/api';
	categorias: ItemCarrito[];

	constructor(private http: HttpClient) {}

	getAll(): Observable<ItemCarrito[]> {
		return this.http.get(`${this.baseUrl}/carrito`).pipe(
    	map((res) => {
    		this.categorias = res['data'];
    		return this.categorias;
    	}),
    	catchError(this.handleError));
  };
  private handleError(error: HttpErrorResponse) {
  	console.log(error);
  	return throwError(error.message);
  }
}
