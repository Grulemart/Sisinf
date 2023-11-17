const pgp = require('./cM');

// Conectar a la base de datos
const db = async() => {
  try {
    const cliente  = await pgp.connect();
    console.log('Conexión a la base de datos exitosa');
    return cliente;
  } 
  catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};

// Función para cerrar la conexión a la base de datos
// Cerrar la conexión a la base de datos
const closeDb = async (cliente) => {
  try {
    await cliente.$pool.end(); // Cierra la conexión
    console.log('Conexión a la base de datos cerrada exitosamente');
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error);
    throw error;
  }
};

module.exports = { db, closeDb }