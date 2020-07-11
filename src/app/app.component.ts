import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = "Ingeniería Web";
	elementosCarrito;

  constructor(private carritoService: CarritoService) {
  }

  ngOnInit() {
  	this.getNumber();
  }

  getNumber() {
  	this.carritoService.getNumber().subscribe(
  		(res) => this.elementosCarrito = res.length);
  }
}
