import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComprarComponent } from './comprar/comprar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    BusquedaComponent,
    CategoriaComponent,
    CarritoComponent,
    ComentarioComponent,
    ComprarComponent,
    ContactComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
