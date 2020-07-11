import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
	constructor() {}
}