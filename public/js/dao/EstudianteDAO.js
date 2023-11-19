import { db, closeDb } from "../conexion/ConnectionManager.cjs";
import EstudianteVO from "../vo/EstudianteVO.js";

class EstudianteDAO extends BaseDAO {
  constructor(db) {
    super(db);
  }

  async insertar(estudiante) {
    console.log("test");
    const query = `
      INSERT INTO Estudiante (correo, nombre, feche, fechs, nTelefono, passwd, idp_e)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    const estudianteVO = new EstudianteVO(estudiante.correo, estudiante.nombre, estudiante.feche, estudiante.fechs, estudiante.nTelefono, estudiante.passwd, estudiante.idp_e);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [estudianteVO.getcorreo(), estudianteVO.getnombre(), estudianteVO.getfechE(), estudianteVO.getfechS(), estudianteVO.gettelefono(), estudianteVO.getpassword(), estudianteVO.getidP_E()];
    
    try {
      const conexion = await db();
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0].correo;
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(correo) {
    const query = 'SELECT * FROM Estudiante WHERE correo = $1';
    const values = [correo];

    try {
      const conexion = await db();
      const result = await conexion.query(query, values);
      await closeDb(conexion);
      return result.rows[0]; // Devuelve el objeto EstudianteVO encontrado
    } catch (error) {
      throw error;
    }
  }

  async actualizar(estudiante) {
    const query = `
      UPDATE Estudiante
      SET nombre = $2, feche = $3, fechs = $4, nTelefono = $5, passwd = $6, idp_e = $7
      WHERE correo = $1
    `;
    
    const estudianteVO = new EstudianteVO(estudiante.correo, estudiante.nombre, estudiante.feche, estudiante.fechs, estudiante.nTelefono, estudiante.passwd, estudiante.idp_e);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [estudianteVO.getcorreo(), estudianteVO.getnombre(), estudianteVO.getfechE(), estudianteVO.getfechS(), estudianteVO.gettelefono(), estudianteVO.getpassword(), estudianteVO.getidP_E()];

    try {
      const conexion = await db();
      await conexion.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la actualización se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async eliminar(correo) {
    const query = 'DELETE FROM Estudiante WHERE correo = $1';
    const values = [correo];

    try {
      const conexion = await db();
      await conexion.query(query, values);
      await closeDb(conexion);
      return true; // Indica que la eliminación se realizó con éxito
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodos() {
    try {
      const conexion = await db();
      const estudiantes = await conexion.any('SELECT * FROM Estudiante');
      await closeDb(conexion);
      return estudiantes;
    } catch (error) {
      console.error('Error al obtener los pisos:', error);
      throw error;
    }
  }

}

export default EstudianteDAO;

