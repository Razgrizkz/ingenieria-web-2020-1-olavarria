import { Component, OnInit } from '@angular/core';
import { ItemCarrito } from 'src/app/carrito';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
	error = '';
	success = '';
	carrito: ItemCarrito[]

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
  }

  getProductos(carrito: ItemCarrito[]): void {
  	this.carritoService.getAll().subscribe(
  		(res: ItemCarrito[]) => {
  			this.carrito = res;
  		},
  		(err) => {
  			this.error = err;
  		}
  	);
  }

}
