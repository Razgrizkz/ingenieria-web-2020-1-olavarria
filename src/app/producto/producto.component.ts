import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/producto';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls:  ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
	producto: Producto;
  error = '';
  success = '';
  cantidad = '';

  constructor(
  	private productoService: ProductoService,
  	private route: ActivatedRoute
  	) { }

  ngOnInit() {
  	this.getProducto(this.producto);
  }

  getProducto(productos: Producto): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.productoService.get(id).subscribe(
  		(res: Producto) => {
  			this.producto = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  };

  addToCart(id: string, qty: string): void {
  	if(qty == '') {
  		this.error = 'Debes seleccionar la cantidad de libros que vas a comprar.';
  		setTimeout(() => {
  			this.error = '';
  		}, 5000)
  	} else {
  		if(this.productoService.addToCart(id, qty)){
  			this.success = 'Producto añadido al carro!';
  			setTimeout(() => {
  				this.success = '';
  			}, 5000)
  		}
  	}
  }
}
