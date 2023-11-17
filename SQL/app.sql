CREATE TABLE Piso(
    idpiso integer primary key, 
    precio integer not null, 
    descripcion varchar(100), 
    residentes integer not null, 
    ubicacion varchar(120) not null);

CREATE TABLE Estudiante(
    correo varchar(50) primary key, 
    nombre varchar(50) not null,
    feche date,
    fechs date, 
    nTelefono integer not null, 
    passwd varchar(120) not null, 
    idp_e integer not null, 
    foreign key (idp_e) references Piso(idpiso));

CREATE TABLE Anuncio(
    idanuncio integer primary key, 
    idp_a integer not null, 
    ide varchar(50) not null, 
    foreign key (idp_a) references Piso(idpiso),
    foreign key (ide) references Estudiante(correo));   