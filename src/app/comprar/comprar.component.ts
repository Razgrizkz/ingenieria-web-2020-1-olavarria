import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/checkout';
import { ItemCarrito } from 'src/app/carrito';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
	info = '';
	error = '';
	success = '';
	carrito: ItemCarrito[];
	ticket: Checkout;
	total = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit() {
  	this.getAllSimple();
  }

  getAllSimple() {
  	this.carritoService.getAllSimple().subscribe(
  		(res) => {
  			this.carrito = res;
  		})
  }
}
