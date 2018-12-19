import { Component, OnInit } from '@angular/core';
import { ProductoServide } from '../services/vivaorganica.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ProductoServide]
})
export class ListaComponent implements OnInit {
  public productos: Producto[];
  public errorMessage;
  public confirmar;

  public url = 'https://vivaorganica.tk/v1/';
  constructor(private _productoServide: ProductoServide, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('lista component Cargado');
    this.getLista();
  }

  getLista() {
    this._productoServide.getLista().subscribe(
      result => {
        console.log(result);
        this.productos = result.data;

        if (!this.productos) {
          alert('Error al traer los productos');
        }
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('error en la peticion');
        }
      }

    );
  }

  onDeleteConfirm(id) {
    this.confirmar = id;
  }

  onCancelarConfirm(id) {
    this.confirmar = null;
  }


  onDeleteProducto(id) {
    this.confirmar = id;
    this._productoServide.deleteProducto(id).subscribe(
      response => {
        console.log(response);
        if (!response.message) {
          alert('Error con el servidor');
          console.log(response);
        } else {
          console.log('todo bien');
          alert('empleado eliminado');
          this._router.navigate(['/']);
        }
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert('Error interno');
        }
      }


    );


  }


  SerializeCurrency(precio: number) {
    let curr = '$' + precio;
    return curr;
  }
}
