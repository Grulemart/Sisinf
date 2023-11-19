class AnuncioVO {
    constructor(idAnuncio, idP_A, idE) {
        this.idanuncio = idAnuncio;
        this.idp_a = idP_A;
        this.ide = idE;
    }

    getidAnuncio() {
        return this.idanuncio;
    }

    setidAnuncio(idAnuncio) {
        this.idanuncio = idAnuncio;
    }

    getidE() {
        return this.ide;
    }

    setidE(idE) {
        this.ide = idE;
    }

    getidP_A() {
        return this.idp_a;
    }

    setidP_A(idP_A) {
        this.idp_a = idP_A;
    }
}


module.exports = AnuncioVO;