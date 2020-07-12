import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
	baseUrl = 'http://localhost/api';
	comentarios: Comentario[];

	constructor(private http: HttpClient) {}

	getAll(id: number): Observable<Comentario[]> {
		return this.http.get(`${this.baseUrl}/comentarios?id=${id}`).pipe(
    	map((res) => {
    		this.comentarios = res['data'];
    		return this.comentarios;
    	}),
    	catchError(this.handleError));
  }

  addComment(id: number, calif: number, com: string, name: string) {
  	return this.http.post(
  		`${this.baseUrl}/comentario`, {id, calif, com, name})
  	.subscribe((data) => {
  			console.log(data[0])
  		 	return data[0]}
  	);
  }

  private handleError(error: HttpErrorResponse) {
  	console.log(error);
  	return throwError(error.message);
  }
}