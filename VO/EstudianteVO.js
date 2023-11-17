class EstudianteVO {
    constructor(correo, nombre, telefono, password, idP_E) {
        this.correo = correo;
        this.nombre = nombre;
        this.nTelefono = telefono;
        this.passwd = password;
        this.idp_e = idP_E;
        this.feche = null; // La propiedad fechE se inicializa como null, ya que en Java no se proporciona un valor inicial.
        this.fechs = null; // La propiedad fechS se inicializa como null, ya que en Java no se proporciona un valor inicial.
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
        return this.nTelefono;
    }

    settelefono(telefono) {
        this.nTelefono = telefono;
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