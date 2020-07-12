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
	carrito: ItemCarrito[];

	constructor(private http: HttpClient) {}

	getAll(): Observable<ItemCarrito[]> {
		return this.http.get(`${this.baseUrl}/carrito`).pipe(
    	map((res) => {
    		this.carrito = res['data'];
    		return this.carrito;
    	}),
    	catchError(this.handleError));
  };

  getAllSimple(): Observable<ItemCarrito[]> {
     return this.http.get(`${this.baseUrl}/carritosimple`).pipe(
       map((res) => {
         this.carrito = res['data'];
         return this.carrito;
       }),
       catchError(this.handleError));
  }

  getNumber(): Observable<ItemCarrito[]> {
    return this.http.get(`${this.baseUrl}/carrito`).pipe(
      map((res) => {
        this.carrito = res['data'];
        return this.carrito;
      }),
      catchError(this.handleError));
  };

  delProd(id: number) {
    return this.http.delete(`${this.baseUrl}/delcarro?id=${id}`)
    .subscribe((data) => {
         return data[0]}
    );
  }

  private handleError(error: HttpErrorResponse) {
  	console.log(error);
  	return throwError(error.message);
  }
}
