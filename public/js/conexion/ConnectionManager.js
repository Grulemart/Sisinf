const {Client} = require('pg')

// Conectar a la base de datos
const db = async (dbConfig) => {
  try {
    const cliente = new Client(dbConfig)
    await cliente.connect();
    //console.log('Conexión a la base de datos exitosa');
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
    await cliente.end(); // Cierra la conexión
    //console.log('Conexión a la base de datos cerrada exitosamente');
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error);
    throw error;
  }
};

module.exports = { db, closeDb }