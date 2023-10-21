-- Insertar datos en la tabla Ejecucion
INSERT INTO "Ejecucion" ("ID", "Hora", "Precio")
VALUES (1, '12:30:00', 210000);

-- Insertar datos en la tabla ViajeXEjecuciones
INSERT INTO "ViajeXEjecuciones" ("ID_Ejecucion", "ID_Viaje")
VALUES (1, 1);

-- Insertar datos en la tabla Usuario
INSERT INTO "Usuario" ("Correo", "Contraseña", "Pasaporte", "Nombre_1", "Apellido_1", "Telefono", "Check_in")
VALUES ('jecruz@estudiantec.cr', 'clave', '17287123651', 'Jose', 'Cruz', 60068894, FALSE);

-- Insertar datos en la tabla Estudiante
INSERT INTO "Estudiante" ("Carnet", "Universidad", "Correo_Usuario")
VALUES ('2021050675', 'TEC', 'jecruz@estudiantec.cr');

-- Insertar datos en la tabla Maleta
INSERT INTO "Maleta" ("Numero", "Peso", "Color", "Matricula_Avion", "Correo_Usuario")
VALUES (1, 7, 'azul', 'B74701', 'jecruz@estudiantec.cr');

-- Actualizar la tabla Ejecucion
UPDATE "Ejecucion"
SET "Matricula_Avion" = 'B74701'
WHERE "ID" = 2;



