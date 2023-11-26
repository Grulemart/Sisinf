CREATE TABLE Estudiante (
    correo varchar(50) PRIMARY KEY, 
    nombre varchar(50) NOT NULL,
    edad integer NOT NULL,
    telefono integer NOT NULL,
    profesion varchar(50) NOT NULL,
    descripcion varchar(100) NOT NULL,
    passwd varchar(120) NOT NULL
);

CREATE TABLE Piso (
    idpiso SERIAL PRIMARY KEY,
    correo_estudiante varchar(50) NOT NULL REFERENCES Estudiante(correo),
    precio integer NOT NULL, 
    descripcion varchar(100), 
    habitaciones integer NOT NULL, 
    ubicacion varchar(50) NOT NULL
);
