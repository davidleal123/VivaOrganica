export class Producto {
    constructor(
        public business_unit_names: string,
        public cost: number,
        public equivalent: number,
        public id: number,
        public image: string,
        public is_active: boolean,
        public name: string,
    ) {
    }
}

export class PostProducto {
    constructor(
        public name: string,
        public equivalent: number,
        public cost: number,
        public business_units: any
    ) { }

}
