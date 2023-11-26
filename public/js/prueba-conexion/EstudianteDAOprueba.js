const EstudianteDAO = require("../dao/EstudianteDAO");

// Crear una instancia del EstudianteDAO
const estudianteDao = new EstudianteDAO();

// Función para ejecutar pruebas
async function runTests() {
  try {
    // Prueba de inserción
    const estudiante = {
      correo: "ejemplo@correo.com",
      nombre: "Ejemplo Nombre",
      feche: new Date(),
      fechs: new Date(),
      nTelefono: "123456789",
      passwd: "password123",
      idp_e: 1,
    };
    const idEstudiante = await estudianteDao.insertar(estudiante);
    console.log("Estudiante insertado con ID:", idEstudiante);

    // Prueba de obtención por ID
    const estudianteRecuperado = await estudianteDao.obtenerPorId(idEstudiante);
    console.log("Estudiante recuperado por ID:", estudianteRecuperado);

    // Prueba de actualización
    const estudianteActualizado = {
      correo: "nuevo@correo.com",
      nombre: "Nuevo Nombre",
      feche: new Date(),
      fechs: new Date(),
      nTelefono: "987654321",
      passwd: "nuevoPassword",
      idp_e: 2,
    };
    await estudianteDao.actualizar(estudianteActualizado);
    console.log("Estudiante actualizado");

    // Prueba de eliminación
    await estudianteDao.eliminar(idEstudiante);
    console.log("Estudiante eliminado");
  } catch (error) {
    console.error("Error:", error);
  }
}

// Ejecutar las pruebas
runTests();


