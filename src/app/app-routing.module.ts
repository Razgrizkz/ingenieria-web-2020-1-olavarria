import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoComponent    } from './producto/producto.component';
import { BusquedaComponent    } from './busqueda/busqueda.component';
import { CarritoComponent     } from './carrito/carrito.component';
import { ComprarComponent     } from './comprar/comprar.component';
import { ContactComponent     } from './contact/contact.component';
import { IndexComponent       } from './index/index.component';

const routes: Routes = [
	{ path: 'producto/:id',   component: ProductoComponent  },
	{ path: 'buscar',         component: BusquedaComponent  },
	{ path: 'carrito',        component: CarritoComponent   },
	{ path: 'comprar',        component: ComprarComponent   },
	{ path: 'contacto',       component: ContactComponent   },
	{ path: '',               component: IndexComponent     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
