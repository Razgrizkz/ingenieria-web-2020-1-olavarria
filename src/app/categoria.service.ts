import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
	baseUrl = 'http://localhost/api';
	categorias: Categoria[];

	constructor(private http: HttpClient) {}

	getAll(): Observable<Categoria[]> {
		return this.http.get(`${this.baseUrl}/categories`).pipe(
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
