const { db, closeDb } = require("../conexion/ConnectionManager.js");
const PisoVO = require("../vo/PisoVO.js")

class PisoDAO {

  constructor(dbConfig) {
    this.dbConfig = dbConfig
  }

  async insertar(piso) {
    const query = `INSERT INTO Piso (correo_estudiante, precio, descripcion, habitaciones, ubicacion) 
    VALUES ($1, $2, $3, $4, $5)`;
    
    const pisoVO = new PisoVO(piso.correo, piso.precio, piso.descripcion, piso.habitaciones, piso.ubicacion);
    const values = [pisoVO.getCorreo(), pisoVO.getPrecio(), pisoVO.getDescripcion(), pisoVO.getHabitaciones(), pisoVO.getUbicacion()];

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(correo) {
    const query = 'SELECT * FROM Piso WHERE correo_estudiante = $1';
    const values = [correo];

    try {
      const conexion = await db(this.dbConfig);
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0]; // Devuelve el objeto PisoVO encontrado
    } catch (error) {
      throw error;
    }
  }

  async actualizar(piso) {
    const query = `
      UPDATE Piso
      SET precio = $2, descripcion = $3, habitantes = $4, ubicacion = $5
      WHERE correo_estudiante = $1
    `;
    const values = [piso.correo, piso.precio, piso.descripcion, piso.habitantes, piso.ubicacion];

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la actualización se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async eliminar(correo) {
    const query = 'DELETE FROM Piso WHERE correo_estudiante = $1';
    const values = [correo];

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la eliminación se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodos() {
    try {
      const conexion = await db(this.dbConfig);
      const anuncios = await conexion.query('SELECT * FROM Piso');
      await closeDb(conexion);
      console.log(anuncios.rows)
      return anuncios.rows;
    } catch (error) {
      console.error('Error al obtener los pisos:', error);
      throw error;
    }
  }

}

module.exports = PisoDAO;
