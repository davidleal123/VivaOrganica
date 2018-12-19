import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListaComponent} from './lista/lista.component';
import { AgregarProductoComponent} from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent} from './editar-producto/editar-producto.component';

const routes: Routes = [
    {path: '', component: ListaComponent},
    // {path: '**', component: ListaComponent},
    {path: 'Productos', component: ListaComponent},
    {path: 'Editar/:id', component: EditarProductoComponent},
    {path: 'Agregar', component: AgregarProductoComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
