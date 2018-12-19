import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto, PostProducto } from '../models/Producto';

@Injectable()
export class ProductoServide {
    public url: string;
    constructor(private _http: Http) {
        this.url = 'https://vivaorganica.tk/v1/unit';
    }

    getLista() {
        // tslint:disable-next-line:max-line-length
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Conent-Type': 'application/json', 'Authorization': 'Basic QlJPV1NFUjplQjgwMzhGNDNCYjZCMkVkY0ZEZjRjZDcyQUZhY2U2QQ==' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url, options)
            .map(res => res.json());
    }

    getProducto(id: number) {
        // tslint:disable-next-line:max-line-length
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Conent-Type': 'application/json', 'Authorization': 'Basic QlJPV1NFUjplQjgwMzhGNDNCYjZCMkVkY0ZEZjRjZDcyQUZhY2U2QQ==' });
        let options = new RequestOptions({ headers: headers });

        return this._http.get(this.url + '/' + id, options)
            .map(res => res.json());
    }

    postProducto(producto: PostProducto) {
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Conent-Type': 'application/json', 'Authorization': 'Basic QlJPV1NFUjplQjgwMzhGNDNCYjZCMkVkY0ZEZjRjZDcyQUZhY2U2QQ==' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url, producto, options)
            .map(res => res.json());
    }

    putProducto(producto: PostProducto, id: number) {
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Conent-Type': 'application/json', 'Authorization': 'Basic QlJPV1NFUjplQjgwMzhGNDNCYjZCMkVkY0ZEZjRjZDcyQUZhY2U2QQ==' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this.url + '/' + id, producto, options)
            .map(res => res.json());
    }

    deleteProducto(id: number) {
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*', 'Conent-Type': 'application/json', 'Authorization': 'Basic QlJPV1NFUjplQjgwMzhGNDNCYjZCMkVkY0ZEZjRjZDcyQUZhY2U2QQ==' });
        let options = new RequestOptions({ headers: headers });

        return this._http.delete(this.url + '/' + id, options)
            .map(res => res.json());
    }

}
