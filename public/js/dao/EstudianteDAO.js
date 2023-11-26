const { db, closeDb } = require('../conexion/ConnectionManager.js')
const EstudianteVO = require('../vo/EstudianteVO.js')

class EstudianteDAO {
  constructor(dbConfig) {
    this.dbConfig = dbConfig
  }

  async insertar(estudiante) {
    
    console.log(estudiante)

    const query = 
    `INSERT INTO Estudiante (correo, nombre, edad, telefono, profesion, descripcion, passwd)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const estudianteVO = new EstudianteVO(estudiante.correo, estudiante.nombre, estudiante.edad, estudiante.telefono, estudiante.profesion, estudiante.descripcion, estudiante.password);
    const values = [estudianteVO.getcorreo(), estudianteVO.getnombre(), estudianteVO.getedad(), estudianteVO.gettelefono(), estudianteVO.getProfesion(), estudianteVO.getDescripcion(), estudianteVO.getpassword()];

    console.log(values)
    

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
      return {name: estudiante.nombre, correo: estudiante.correo}
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(correo) {
    const query = 'SELECT * FROM Estudiante WHERE correo = $1';
    const values = [correo];
    try {
      const conexion = await db(this.dbConfig);
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
      SET nombre = $2, telefono = $3, profesion = $4, descripcion = $5, passwd = $6
      WHERE correo = $1
    `;
    
    const estudianteVO = new EstudianteVO(estudiante.correo, estudiante.nombre, estudiante.telefono, estudiante.profesion, estudiante.descripcion, estudiante.password);

    // Obtener los valores de PisoVO usando sus métodos
    const values = [estudianteVO.getcorreo(), estudianteVO.getnombre(), estudianteVO.gettelefono(), estudianteVO.getProfesion(), estudianteVO.getDescripcion(), estudianteVO.getpassword()];

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
    } catch (error) {
      throw error;
    }
  }

  async eliminar(correo) {
    const query = 'DELETE FROM Estudiante WHERE correo = $1';
    const values = [correo];

    try {
      const conexion = await db(this.dbConfig);
      await conexion.query(query, values);
      await closeDb(conexion);
    } catch (error) {
      throw error;
    }
  }

  async obtenerTodos() {
    try {
      const conexion = await db(this.dbConfig);
      const estudiantes = await conexion.query('SELECT * FROM Estudiante');
      await closeDb(conexion);
      return estudiantes.rows;
    } catch (error) {
      console.error('Error al obtener los pisos:', error);
      throw error;
    }
  }

}

module.exports = EstudianteDAO;

