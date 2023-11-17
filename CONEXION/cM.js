const pgp = require('pg-promise')();

const dbConfig = {
  host: 'localhost', // Cambia esto por la dirección de tu base de datos
  port: 5432, // Cambia el puerto si es diferente
  database: 'sisinf_grupo_b06', // Nombre de tu base de datos
  user: 'postgres', // Usuario de la base de datos
  password: '1234' // Contraseña de la base de datos
};

const db = pgp(dbConfig);

module.exports = db;

