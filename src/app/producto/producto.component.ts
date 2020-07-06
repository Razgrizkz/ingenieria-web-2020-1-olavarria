import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls:  ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
	productos: Producto[];
  error = '';
  success = '';	

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  	this.getProductos();
  }

  getProductos(): void {
  	this.productoService.getAll().subscribe(
  		(res: Producto[]) => {
  			this.productos = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  }
}
