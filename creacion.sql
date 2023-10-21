-- Tabla de usuario
CREATE TABLE "Usuario" (
    "Correo" VARCHAR(40) NOT NULL,
    "Contraseña" VARCHAR(20) NOT NULL,
    "Pasaporte" VARCHAR(20),
    "Nombre_1" VARCHAR(30),
    "Nombre_2" VARCHAR(30),
    "Apellido_1" VARCHAR(30),
    "Apellido_2" VARCHAR(30),
    "Telefono" INT,
    "Check_in" BOOL,
    PRIMARY KEY ("Correo")
);

-- Tabla del avión
CREATE TABLE "Avion" (
    "Matricula" VARCHAR(40),
    "Modelo" VARCHAR(255),
    "Capacidad" INT,
    PRIMARY KEY ("Matricula")
);

CREATE TABLE "Aero" (
    "Id" VARCHAR(60) NOT NULL,
    "Puerta" VARCHAR(30),
    "Ciudad" VARCHAR(60),
    "Nombre" VARCHAR(255),
    PRIMARY KEY ("Id")
);

CREATE TABLE "Viaje" (
    "Id" INT NOT NULL,
    "Estado" BOOL,
    "Fin" VARCHAR(60),
    "Inicio" VARCHAR(60),
    PRIMARY KEY ("Id"),
    FOREIGN KEY ("Fin") REFERENCES "Aero"("Id"),
    FOREIGN KEY ("Inicio") REFERENCES "Aero"("Id")
);

CREATE TABLE "Ejecucion" (
    "Id" INT NOT NULL,
    "Hora" TIME,
    "Precio" INT,
    "Matricula_avion" VARCHAR(40),
    PRIMARY KEY ("Id"),
    FOREIGN KEY ("Matricula_avion") REFERENCES "Avion"("Matricula")
);

-- Tabla de estudiantes
CREATE TABLE "Estudiante" (
    "Carnet" VARCHAR(30) NOT NULL,
    "Universidad" VARCHAR(60),
    "Correo_usuario" VARCHAR(40) NOT NULL,
    PRIMARY KEY ("Carnet"),
    FOREIGN KEY ("Correo_usuario") REFERENCES "Usuario"("Correo")
);

-- Tabla de maletas
CREATE TABLE "Maleta" (
    "Numero" INT NOT NULL,
    "Peso" INT,
    "Color" VARCHAR(20),
    "Matricula_avion" VARCHAR(30),
    "Correo_usuario" VARCHAR(40),
    PRIMARY KEY ("Numero"),
    FOREIGN KEY ("Matricula_avion") REFERENCES "Avion"("Matricula"),
    FOREIGN KEY ("Correo_usuario") REFERENCES "Usuario"("Correo")
);

-- Tabla de asientos
CREATE TABLE "Asiento" (
    "Numero" INT NOT NULL,
    "X" INT,
    "Y" INT,
    "Ocupado" BOOL,
    "Correo_usuario" VARCHAR(40),
    "Matricula_avion" VARCHAR(40),
    PRIMARY KEY ("Numero"),
    FOREIGN KEY ("Matricula_avion") REFERENCES "Avion"("Matricula"),
    FOREIGN KEY ("Correo_usuario") REFERENCES "Usuario"("Correo")
);

-- Tabla de la entidad débil promoción
CREATE TABLE "Promocion" (
    "Precio" INT,
    "Fecha_inicio" DATE,
    "Fecha_final" DATE,
    "Imagen" VARCHAR(1000),
    "Id_ejecucion" INT,
    FOREIGN KEY ("Id_ejecucion") REFERENCES "Ejecucion"("Id")
);

-- Tabla auxiliar que relaciona vuelos con usuarios
CREATE TABLE "Ejecucionxusuario" (
    "Id_ejecucion" INT,
    "Correo_usuario" VARCHAR(40),
    FOREIGN KEY ("Id_ejecucion") REFERENCES "Ejecucion"("Id"),
    FOREIGN KEY ("Correo_usuario") REFERENCES "Usuario"("Correo")
);

CREATE TABLE "Viajexejecuciones" (
    "Id_ejecucion" INT,
    "Id_viaje" INT,
    FOREIGN KEY ("Id_ejecucion") REFERENCES "Ejecucion"("Id"),
    FOREIGN KEY ("Id_viaje") REFERENCES "Viaje"("Id")
);

-- Tabla de las tarjetas del usuario
CREATE TABLE "Tarjeta" (
    "Numero" VARCHAR(20) NOT NULL,
    "Cs" INT,
    "Vencimiento" DATE,
    "Correo_usuario" VARCHAR(40),
    PRIMARY KEY ("Numero"),
    FOREIGN KEY ("Correo_usuario") REFERENCES "Usuario"("Correo")
);

CREATE TABLE "Escala" (
    "Id_viaje" INT NOT NULL,
    "Id_aero" VARCHAR(60) NOT NULL,
    FOREIGN KEY ("Id_viaje") REFERENCES "Viaje"("Id"),
    FOREIGN KEY ("Id_aero") REFERENCES "Aero"("Id")
);
