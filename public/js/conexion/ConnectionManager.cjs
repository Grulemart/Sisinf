const {Client} = require('pg')

const dbConfig = new Client({
  host: 'localhost', // Cambia esto por la dirección de tu base de datos
  port: 5432, // Cambia el puerto si es diferente
  database: 'sisinf_grupo_b06', // Nombre de tu base de datos
  user: 'postgres', // Usuario de la base de datos
  password: 'asdf' // Contraseña de la base de datos
})

// Conectar a la base de datos
export const db = async() => {
  try {
    const cliente  = await dbConfigpgp.connect();
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
export const closeDb = async (cliente) => {
  try {
    await cliente.$pool.end(); // Cierra la conexión
    console.log('Conexión a la base de datos cerrada exitosamente');
  } catch (error) {
    console.error('Error al cerrar la conexión a la base de datos:', error);
    throw error;
  }
};

module.exports = { db, closeDb }