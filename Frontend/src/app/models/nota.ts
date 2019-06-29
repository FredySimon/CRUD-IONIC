export class Nota {

    constructor(_id='', nombre_nota='', descripcion=''){
        this._id = _id;
        this.nombre_nota = nombre_nota;
        this.descripcion = descripcion;
    }

    _id: string;
    nombre_nota: string;
    descripcion: string;
}
