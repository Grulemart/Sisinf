class PisoVO {
    constructor(correo, precio, descripcion, habitaciones, ubicacion) {
        this.correo = correo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.habitaciones = habitaciones;
        this.ubicacion = ubicacion;
    }

    getCorreo() {
        return this.correo;
    }

    setCorreo(correo) {
        this.correo = correo;
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

    getHabitaciones() {
        return this.habitaciones;
    }

    setHabitaciones(habitaciones) {
        this.habitaciones = habitaciones;
    }

    getUbicacion() {
        return this.ubicacion;
    }

    setUbicacion(ubicacion) {
        this.ubicacion = ubicacion;
    }
}

module.exports = PisoVO;
