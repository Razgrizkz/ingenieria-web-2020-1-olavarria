import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoComponent    } from './producto/producto.component';
import { CategoriaComponent   } from './categoria/categoria.component';
import { BusquedaComponent    } from './busqueda/busqueda.component';
import { CarritoComponent     } from './carrito/carrito.component';

const routes: Routes = [
	{ path: 'producto/:id',   component: ProductoComponent  },
	{ path: 'buscar',         component: BusquedaComponent  },
	{ path: 'carrito',        component: CarritoComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
