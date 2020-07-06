import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent         } from './app.component';
import { ProductoComponent    } from './producto/producto.component';
import { CategoriaComponent   } from './categoria/categoria.component';
import { BusquedaComponent    } from './busqueda/busqueda.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full'   },
	{ path: 'producto/:id', component: ProductoComponent  },
	{ path: 'categorias',   component: CategoriaComponent },
	{ path: 'buscar',       component: BusquedaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
