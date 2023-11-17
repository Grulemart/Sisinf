class PisoVO {
    constructor(idPiso, precio, descripcion, residentes, ubicacion) {
        this.idpiso = idPiso;
        this.precio = precio;
        this.descripcion = descripcion;
        this.residentes = residentes;
        this.ubicacion = ubicacion;
    }

    getIdPiso() {
        return this.idpiso;
    }

    setIdPiso(idPiso) {
        this.idpiso = idPiso;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        this.precio = precio;
    }

    getDescripcion() {
        return this.descripcion;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    getResidentes() {
        return this.residentes;
    }

    setResidentes(residentes) {
        this.residentes = residentes;
    }

    getUbicacion() {
        return this.ubicacion;
    }

    setUbicacion(ubicacion) {
        this.ubicacion = ubicacion;
    }
}

module.exports = PisoVO;
