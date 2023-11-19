const { db, closeDb } = require("./ConnectionManager");
const PisoVO = require("./PisoVO")

class PisoDAO extends BaseDAO {

  constructor(db) {
    super(db);
  }

  async insertar(piso) {
    const query = `INSERT INTO Piso (idpiso, precio, descripcion, residentes, ubicacion) VALUES ($1, $2, $3, $4, $5) RETURNING idpiso`;
    // Crear una instancia de PisoVO
    const pisoVO = new PisoVO(piso.idpiso, piso.precio, piso.descripcion, piso.residentes, piso.ubicacion);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [pisoVO.getIdPiso(), pisoVO.getPrecio(), pisoVO.getDescripcion(), pisoVO.getResidentes(), pisoVO.getUbicacion()];

    try {
      const conexion = await db();
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0].idpiso;
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(idpiso) {
    const query = 'SELECT * FROM Piso WHERE idpiso = $1';
    const values = [idpiso];

    try {
      const conexion = await db();
      const result = await conexion.db.query(query, values);
      await closeDb(conexion);
      return result.rows[0]; // Devuelve el objeto PisoVO encontrado
    } catch (error) {
      throw error;
    }
  }

  async actualizar(piso) {
    const query = `
      UPDATE Piso
      SET precio = $2, descripcion = $3, residentes = $4, ubicacion = $5
      WHERE idpiso = $1
    `;
    const values = [piso.idpiso, piso.precio, piso.descripcion, piso.residentes, piso.ubicacion];

    try {
      const conexion = await db();
      await conexion.db.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la actualización se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async eliminar(idpiso) {
    const query = 'DELETE FROM Piso WHERE idpiso = $1';
    const values = [idpiso];

    try {
      const conexion = await db();
      await conexion.db.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la eliminación se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodos() {
    try {
      const conexion = await db();
      const anuncios = await conexion.any('SELECT * FROM Piso');
      await closeDb(conexion);
      return anuncios;
    } catch (error) {
      console.error('Error al obtener los pisos:', error);
      throw error;
    }
  }

}

module.exports = PisoDAO;
