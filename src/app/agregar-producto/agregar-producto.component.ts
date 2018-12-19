import { Component, OnInit } from '@angular/core';
import { PostProducto } from '../models/Producto';
import { ProductoServide } from '../services/vivaorganica.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css'],
  providers: [ProductoServide]

})
export class AgregarProductoComponent implements OnInit {
  public producto: PostProducto;
  public errorMessage: String;
  constructor(private _productoServide: ProductoServide, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log('Componente agregar');
    this.producto = new PostProducto('', 0, 0, []);
    this.producto.business_units.push({ 'id': 1 });
  }

  public onSubmit() {
    if (!this.producto.name || !this.producto.cost || !this.producto.equivalent) {
      console.log('campos vacios');
      alert('No puede meter datos vacios');
    } else if (this.producto.cost < 0 || this.producto.equivalent < 0) {
      alert('No puede meter datos negativos');
    } else {
      this._productoServide.postProducto(this.producto).subscribe(
        response => {
          console.log(this.producto);
          console.log(response);
          if (!response) {
            alert('Error con el servidor');
          } else {
            console.log('todo bien');
            this._router.navigate(['/Productos']);
            alert('Producto dado de alta');
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
