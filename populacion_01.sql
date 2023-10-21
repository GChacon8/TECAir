-- Insertar datos en la tabla Aero
INSERT INTO "Aero" ("ID", "Ciudad", "Nombre")
VALUES
('SJO', 'San José', 'Aeropuerto Internacional Juan Santamaría'),
('BAI', 'Buenos Aires', 'Aeropuerto de Buenos Aires'),
('MIA', 'Miami', 'Aeropuerto Internacional de Miami'),
('MEX', 'Ciudad de Mexico', 'Aeropuerto Internacional Benito Juárez de la Ciudad de Mexico'),
('PTY', 'Ciudad de Panama', 'Aeropuerto Internacional de Tocumen');
-- Insertar datos en la tabla Viaje
INSERT INTO "Viaje" ("ID", "Estado")
VALUES
(1, FALSE),
(2, FALSE),
(3, FALSE);
-- Vuelo directo a Miami
UPDATE "Viaje"
SET "Inicio" = 'SJO', "Fin" = 'MIA'
WHERE "ID" = 1;
-- Vuelo directo a Argentina
UPDATE "Viaje"
SET "Inicio" = 'SJO', "Fin" = 'BAI'
WHERE "ID" = 2;
-- Vuelo a Miami con escalas
UPDATE "Viaje"
SET "Inicio" = 'SJO', "Fin" = 'MIA'
WHERE "ID" = 3;
-- Insertar datos en la tabla Escala
INSERT INTO "Escala" ("ID_Viaje", "ID_Aero")
VALUES (3, 'PTY');
-- Usuario administrador
INSERT INTO "Usuario" ("Correo", "Contraseña", "Nombre_1", "Apellido_1", "Pasaporte")
VALUES ('admin@eropuerto.com', '12345678', 'Jose', 'Cruz', '123456789');
-- Insertar datos en la tabla Avion
INSERT INTO "Avion" ("Matricula", "Modelo", "Capacidad")
VALUES
('B74701', 'Boeing747', 120),
('A32001', 'Airbus A320', 120),
('B78701', 'Boeing 787 Dreamliner', 120);










	
