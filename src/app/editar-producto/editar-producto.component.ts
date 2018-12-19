import { Component, OnInit } from '@angular/core';
import { ProductoServide } from '../services/vivaorganica.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostProducto, Producto } from '../models/Producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
  providers: [ProductoServide]

})
export class EditarProductoComponent implements OnInit {
  public producto: Producto;
  public postProducto: PostProducto;
  public errorMessage: String;
  constructor(private _productoServide: ProductoServide, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('Componente editar');
    this.getProductoParams();
  }

  getProductoParams() {
    this.producto = new Producto('', 0, 0, 0, '', true, '');
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this.getProducto(id);
    });

  }

  getProducto(id: number) {
    this._productoServide.getProducto(id).subscribe(
      result => {
        console.log(result);
        this.producto = result;

        if (!this.producto) {
          alert('Error al traer el producto');
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

  public onSubmit() {
    if (!this.producto.name || !this.producto.cost || !this.producto.equivalent) {
      console.log('campos vacios');
      alert('No puede meter datos vacios');
    }  else if (this.producto.cost < 0 || this.producto.equivalent < 0) {
      alert('No puede meter datos negativos');
    } else {
      this.postProducto = new PostProducto(this.producto.name,this.producto.equivalent,this.producto.cost, [{'id': 1}]);
      this._productoServide.putProducto(this.postProducto, this.producto.id).subscribe(
        response => {
          console.log(this.producto);
          console.log(response);
          if (!response) {
            alert('Error con el servidor');
          } else {
            console.log('todo bien');
            this._router.navigate(['/Productos']);
            alert('Producto actualizado');
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
  }


}
