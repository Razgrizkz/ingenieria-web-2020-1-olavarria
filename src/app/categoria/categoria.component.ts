import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/categoria';
import { CategoriaService } from 'src/app/categoria.service';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
	categorias: Categoria[];
	error = '';
	success = '';

	@Output() dataEvent = new EventEmitter<string>();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
  	this.getCategorias();
  }

  getCategorias(): void {
  	this.categoriaService.getAll().subscribe(
  		(res: Categoria[]) => {
  			this.categorias = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  }

  onSelect(id: string) {
  	this.dataEvent.emit(id)
  }
}
