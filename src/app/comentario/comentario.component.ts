import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/comentario';
import { ComentarioService } from 'src/app/comentario.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
	info = '';
	error = '';
	success = '';
	nombre = "Anónimo";
	calificacion = 1;
	comentario = "";
	comentarios: Comentario[];

  constructor(
  	private comentarioService: ComentarioService,
  	private route: ActivatedRoute,
  	private config: NgbRatingConfig
  ) { 
  	config.max = 5;
  }

  ngOnInit() {
  	this.getComentarios(this.comentarios)
  }

  getComentarios(comentarios: Comentario[]) {
  	const id = +this.route.snapshot.paramMap.get('id')
  	this.comentarioService.getAll(id).subscribe(
  	(res: Comentario[]) => {
  		this.comentarios = res;
  	},
  	(err) => {
  		if (err == "res is null") { 
  			this.info = "Aún no hay reseñas de este producto."
  		} else {
  			this.error = err;
  			setTimeout(() => {
  				this.error = ''
  			}, 5000)
  		}
  		
  	}
  	);
  }

  addComentario(calificacion: number, comentario: string, nombre: string) {
  	const id = +this.route.snapshot.paramMap.get('id');
  	if (this.comentarioService.addComment(id, calificacion, comentario, nombre)) {
  		this.comentario = '';
  		this.calificacion = 3;
  		this.nombre = 'Anónimo';
  		this.success = 'Comentario Enviado!';
  		setTimeout(() => {
  			this.success = ''
  		}, 5000)
  	} else {
  		this.error = 'No se pudo agregar tu comentario :( .'
  		setTimeout(() => {
  			this.error = ''
  		}, 5000)
  	}
  }

}
