const AnuncioDAO = require("./AnuncioDAO");

// Crear una instancia del AnuncioDAO
const anuncioDao = new AnuncioDAO(db);

// Función para ejecutar pruebas
async function runTests() {
  try {
    // Prueba de obtener todos los anuncios
    const anuncios = await anuncioDao.obtenerTodos();
    console.log("Anuncios obtenidos:", anuncios);

    // Prueba de inserción
    const anuncio = {
      idanuncio: 1,
      idp_a: 2,
      ide: 3,
    };
    const idAnuncio = await anuncioDao.insertar(anuncio);
    console.log("Anuncio insertado con ID:", idAnuncio);

    // Prueba de obtención por ID
    const anuncioRecuperado = await anuncioDao.obtenerPorId(idAnuncio);
    console.log("Anuncio recuperado por ID:", anuncioRecuperado);

    // Prueba de actualización
    const anuncioActualizado = {
      idanuncio: idAnuncio,
      idp_a: 4,
      ide: 5,
    };
    await anuncioDao.actualizar(anuncioActualizado);
    console.log("Anuncio actualizado");

  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Asegúrate de cerrar la conexión a la base de datos al finalizar
    closeDb();
  }
}

// Ejecutar las pruebas
runTests();


