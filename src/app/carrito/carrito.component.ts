import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrito } from 'src/app/carrito';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
	info = '';
	error = '';
	success = '';
	carrito: ItemCarrito[]

  constructor(
  	private carritoService: CarritoService,
  	private router: Router
  	) { }

  ngOnInit() {
  	this.getProductos(this.carrito);
  }

  getProductos(carrito: ItemCarrito[]): void {
  	this.carritoService.getAll().subscribe(
  		(res: ItemCarrito[]) => {
  			this.carrito = res;
  		},
  		(err) => {
  			if (err == "res is null") { 
  				this.info = "No tienes productos en el carro."
  			} else {
  				this.error = err;
  			}
  		}
  	);
  }

  deleteProducto(id: number) {
  	if(this.carritoService.delProd(id)) {
  		this.success = 'Productos eliminados!';
  	}
  }

}
