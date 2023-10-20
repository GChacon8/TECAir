-- Tabla de usuario
CREATE TABLE Usuario (
    Correo VARCHAR(40) NOT NULL,
    Contraseña VARCHAR(20) NOT NULL,
    Pasaporte VARCHAR(20),
    Nombre_1 VARCHAR(30),
    Nombre_2 VARCHAR(30),
    Apellido_1 VARCHAR(30),
    Apellido_2 VARCHAR(30),
    Telefono INT,
    Check_in BOOL,
    PRIMARY KEY (Correo)
);

-- Tabla del avión
CREATE TABLE Avion (
    Matricula VARCHAR(40),
    Modelo VARCHAR(255),
    Capacidad INT,
    PRIMARY KEY (Matricula)
);

CREATE TABLE Aero (
    ID VARCHAR(60) NOT NULL,
    Puerta VARCHAR(30),
    Ciudad VARCHAR(60),
    Nombre VARCHAR(255),
    PRIMARY KEY (ID)
);

CREATE TABLE Viaje (
    ID INT NOT NULL,
    Estado BOOL,
    Fin VARCHAR(60),
    Inicio VARCHAR(60),
    PRIMARY KEY (ID),
    FOREIGN KEY (Fin) REFERENCES Aero(ID),
    FOREIGN KEY (Inicio) REFERENCES Aero(ID)
);

CREATE TABLE Ejecucion (
    ID INT NOT NULL,
    Hora TIME,
    Precio INT,
    Matricula_Avion VARCHAR(40),
    PRIMARY KEY (ID),
    FOREIGN KEY (Matricula_Avion) REFERENCES Avion(Matricula)
);

-- Tabla de estudiantes
CREATE TABLE Estudiante (
    Carnet VARCHAR(30) NOT NULL,
    Universidad VARCHAR(60),
    Correo_Usuario VARCHAR(40) NOT NULL,
    PRIMARY KEY (Carnet),
    FOREIGN KEY (Correo_Usuario) REFERENCES Usuario(Correo)
);

-- Tabla de maletas
CREATE TABLE Maleta (
    Numero INT NOT NULL,
    Peso INT,
    Color VARCHAR(20),
    Matricula_Avion VARCHAR(30),
    Correo_Usuario VARCHAR(40),
    PRIMARY KEY (Numero),
    FOREIGN KEY (Matricula_Avion) REFERENCES Avion(Matricula),
    FOREIGN KEY (Correo_Usuario) REFERENCES Usuario(Correo)
);

-- Tabla de asientos
CREATE TABLE Asiento (
    Numero INT NOT NULL,
    X INT,
    Y INT,
    Ocupado BOOL,
    Correo_Usuario VARCHAR(40),
    Matricula_Avion VARCHAR(40),
    PRIMARY KEY (Numero),
    FOREIGN KEY (Matricula_Avion) REFERENCES Avion(Matricula),
    FOREIGN KEY (Correo_Usuario) REFERENCES Usuario(Correo)
);

-- Tabla de la entidad débil promoción
CREATE TABLE Promocion (
    Precio INT,
    Fecha_Inicio DATE,
    Fecha_Final DATE,
    Imagen VARCHAR(1000),
    ID_Ejecucion INT,
    FOREIGN KEY (ID_Ejecucion) REFERENCES Ejecucion(ID)
);

-- Tabla auxiliar que relaciona vuelos con usuarios
CREATE TABLE EjecucionXUsuario (
    ID_Ejecucion INT,
    Correo_Usuario VARCHAR(40),
    FOREIGN KEY (ID_Ejecucion) REFERENCES Ejecucion(ID),
    FOREIGN KEY (Correo_Usuario) REFERENCES Usuario(Correo)
);

CREATE TABLE ViajeXEjecuciones (
    ID_Ejecucion INT,
    ID_Viaje INT,
    FOREIGN KEY (ID_Ejecucion) REFERENCES Ejecucion(ID),
    FOREIGN KEY (ID_Viaje) REFERENCES Viaje(ID)
);

-- Tabla de las tarjetas del usuario
CREATE TABLE Tarjeta (
    Numero VARCHAR(20) NOT NULL,
    CS INT,
    Vencimiento DATE,
    Correo_Usuario VARCHAR(40),
    PRIMARY KEY (Numero),
    FOREIGN KEY (Correo_Usuario) REFERENCES Usuario(Correo)
);

CREATE TABLE Escala (
    ID_Viaje INT NOT NULL,
    ID_Aero VARCHAR(60) NOT NULL,
    FOREIGN KEY (ID_Viaje) REFERENCES Viaje(ID),
    FOREIGN KEY (ID_Aero) REFERENCES Aero(ID)
);
