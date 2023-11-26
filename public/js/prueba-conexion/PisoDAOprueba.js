const PisoDAO = require("../dao/PisoDAO");

// Crear una instancia del PisoDAO
const pisoDao = new PisoDAO();

// Función para ejecutar pruebas
async function runTests() {
  try {
    // Prueba de inserción
    const piso = {
      idpiso: 1,
      precio: 1000,
      descripcion: "Apartamento amplio",
      residentes: 2,
      ubicacion: "Ciudad",
    };
    const idPiso = await pisoDao.insertar(piso);
    console.log("Piso insertado con ID:", idPiso);

    // Prueba de obtención por ID
    const pisoRecuperado = await pisoDao.obtenerPorId(idPiso);
    console.log("Piso recuperado por ID:", pisoRecuperado);

    // Prueba de actualización
    const pisoActualizado = {
      idpiso: idPiso,
      precio: 1200,
      descripcion: "Apartamento remodelado",
      residentes: 3,
      ubicacion: "Centro",
    };
    await pisoDao.actualizar(pisoActualizado);
    console.log("Piso actualizado");

    // Prueba de eliminación
    await pisoDao.eliminar(idPiso);
    console.log("Piso eliminado");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Ejecutar las pruebas
runTests();
