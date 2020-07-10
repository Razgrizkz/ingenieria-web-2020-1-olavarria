import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: 'busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
	success = '';
	error = '';
	productos: Producto[];
	busqueda = '';
	tipo = '';
	tipos = ['idCategoria', 'titulo', 'autor', 'codigo'];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  	this.getProductos(this.productos);
  }

  getProductos(productos: Producto[]): void {
  	this.productoService.searchAll().subscribe(
  		(res: Producto[]) => {
  			this.productos = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  }

  searchProductos(tipo: string, busqueda: string): void {
  	this.productoService.search(tipo, busqueda).subscribe(
  		(res: Producto[]) => {
  			this.productos = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  }
}
