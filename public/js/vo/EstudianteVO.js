class EstudianteVO {
    constructor(correo, nombre, edad, telefono, profesion, descripcion, password) {
        this.correo = correo;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.passwd = password;
    }

    setedad(edad) {
        this.edad = edad
    }

    getedad() {
        return this.edad
    }

    setProfesion(profesion) {
        this.profesion = profesion;
    }

    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }

    getProfesion() {
        return this.profesion;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getnombre() {
        return this.nombre;
    }

    setnombre(nombre) {
        this.nombre = nombre;
    }

    getcorreo() {
        return this.correo;
    }

    setcorreo(correo) {
        this.correo = correo;
    }

    gettelefono() {
        return this.telefono;
    }

    settelefono(telefono) {
        this.telefono = telefono;
    }

    getpassword() {
        return this.passwd;
    }

    setpassword(password) {
        this.passwd = password;
    }

    getfechE() {
        return this.feche;
    }

    setfechE(fechE) {
        this.feche = fechE;
    }

    getfechS() {
        return this.fechs;
    }

    setfechS(fechS) {
        this.fechs = fechS;
    }

    getidP_E() {
        return this.idp_e;
    }

    setidP_E(idP_E) {
        this.idp_e = idP_E;
    }
}

module.exports = EstudianteVO;
