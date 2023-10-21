-- Insertar datos en la tabla Ejecucion
INSERT INTO "Ejecucion" ("Id", "Hora", "Precio")
VALUES (1, '12:30:00', 210000);

-- Insertar datos en la tabla ViajeXEjecuciones
INSERT INTO "Viajexejecuciones" ("Id_ejecucion", "Id_viaje")
VALUES (1, 1);

-- Insertar datos en la tabla Usuario
INSERT INTO "Usuario" ("Correo", "Contraseña", "Pasaporte", "Nombre_1", "Apellido_1", "Telefono", "Check_in")
VALUES ('jecruz@estudiantec.cr', 'clave', '17287123651', 'Jose', 'Cruz', 60068894, FALSE);

-- Insertar datos en la tabla Estudiante
INSERT INTO "Estudiante" ("Carnet", "Universidad", "Correo_usuario")
VALUES ('2021050675', 'TEC', 'jecruz@estudiantec.cr');

-- Insertar datos en la tabla Maleta
INSERT INTO "Maleta" ("Numero", "Peso", "Color", "Matricula_avion", "Correo_usuario")
VALUES (1, 7, 'azul', 'B74701', 'jecruz@estudiantec.cr');

-- Actualizar la tabla Ejecucion
UPDATE "Ejecucion"
SET "Matricula_avion" = 'B74701'
WHERE "Id" = 2;



