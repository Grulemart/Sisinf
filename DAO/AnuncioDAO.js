const { db, closeDb } = require("./ConnectionManager");
const AnuncioVO = require("./AnuncioVO")

class AnuncioDAO extends BaseDAO {
  constructor(db) {
    super(db);
  }

  // Método para obtener todos los anuncios
  async obtenerTodos() {
    try {
      const conexion = await db();
      const anuncios = await conexion.any('SELECT * FROM Anuncio');
      await closeDb(conexion);
      return anuncios;
    } catch (error) {
      console.error('Error al obtener los anuncios:', error);
      throw error;
    }
  }

  async insertar(anuncio) {
    const query = `
      INSERT INTO Anuncio (idanuncio, idp_a, ide)
      VALUES ($1, $2, $3)
      RETURNING idanuncio
    `;
    const anuncioVO = new AnuncioVO(anuncio.idanuncio, anuncio.idp_a, anuncio.ide);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [anuncioVO.getidAnuncio(), anuncioVO.getidP_A(), anuncioVO.getidE()];

    try {
      const conexion = await db();
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0].idanuncio;
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(idAnuncio) {
    const query = 'SELECT * FROM Anuncio WHERE idanuncio = $1';
    const values = [idAnuncio];

    try {
      const conexion = await db();
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0]; // Devuelve el objeto AnuncioVO encontrado
    } catch (error) {
      throw error;
    }
  }

  async actualizar(anuncio) {
    const query = `
      UPDATE Anuncio
      SET idp_a = $2, ide = $3
      WHERE idanuncio = $1
    `;
    const anuncioVO = new AnuncioVO(anuncio.idanuncio, anuncio.idp_a, anuncio.ide);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [anuncioVO.getidAnuncio(), anuncioVO.getidP_A(), anuncioVO.getidE()];

    try {
      const conexion = await db();
      await conexion.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la actualización se realizó con éxito
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AnuncioDAO;
