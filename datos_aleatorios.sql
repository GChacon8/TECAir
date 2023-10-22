-- Generar datos aleatorios para la tabla Usuario
INSERT INTO "Usuario" ("Correo", "Contraseña", "Pasaporte", "Nombre_1", "Nombre_2", "Apellido_1", "Apellido_2", "Telefono", "Check_in")
VALUES
    ('usuario1@gmail.com', 'password1', 'AB123456', 'Juan', 'Pablo', 'García', 'López', 123456789, TRUE),
    ('usuario2@yahoo.com', 'mypassword', 'CD789012', 'Maria', 'Isabel', 'Martinez', 'Lopez', 987654321, FALSE),
    ('user3@hotmail.com', 'securepass', 'EF345678', 'Pedro', 'Antonio', 'Rodriguez', 'Perez', 555555555, TRUE);

-- Generar datos aleatorios para la tabla Avion
INSERT INTO "Avion" ("Matricula", "Modelo", "Capacidad")
VALUES
    ('ABC123', 'Boeing 737', 120),
    ('XYZ789', 'Airbus A320', 120),
    ('MNO456', 'Boeing 747', 120);

-- Generar datos aleatorios para la tabla Aero
INSERT INTO "Aero" ("Id", "Puerta", "Ciudad", "Nombre")
VALUES
    ('A001', 'Gate 1', 'New York', 'JFK Airport'),
    ('B002', 'Gate 2', 'Los Angeles', 'LAX Airport'),
    ('C003', 'Gate 3', 'Chicago', 'ORD Airport');

-- Generar datos aleatorios para la tabla Viaje
INSERT INTO "Viaje" ("Id", "Estado", "Fin", "Inicio")
VALUES
    (4, TRUE, 'A001', 'B002'),
    (5, FALSE, 'B002', 'C003'),
    (6, TRUE, 'C003', 'A001');

-- Generar datos aleatorios para la tabla Ejecucion
INSERT INTO "Ejecucion" ("Id", "Hora", "Precio", "Matricula_avion")
VALUES
    (4, '08:00:00', 500, 'ABC123'),
    (5, '10:30:00', 600, 'XYZ789'),
    (6, '12:45:00', 800, 'MNO456');
	
	
-- Generar datos aleatorios para la tabla Ejecucionxusuario
INSERT INTO "Ejecucionxusuario" ("Id_ejecucion", "Correo_usuario")
VALUES
    (4, 'usuario1@gmail.com'),
    (5, 'usuario2@yahoo.com'),
    (6, 'user3@hotmail.com');

-- Generar datos aleatorios para la tabla Estudiante
INSERT INTO "Estudiante" ("Carnet", "Universidad", "Correo_usuario")
VALUES
    ('ST12345', 'University A', 'usuario1@gmail.com'),
    ('ST67890', 'University B', 'usuario2@yahoo.com'),
    ('ST24680', 'University C', 'user3@hotmail.com');

-- Generar datos aleatorios para la tabla Maleta
INSERT INTO "Maleta" ("Numero", "Peso", "Color", "Matricula_avion", "Correo_usuario")
VALUES
    (4, 15, 'Negro', 'ABC123', 'usuario1@gmail.com'),
    (5, 20, 'Rojo', 'XYZ789', 'usuario2@yahoo.com'),
    (6, 10, 'Azul', 'MNO456', 'user3@hotmail.com');

-- Generar datos aleatorios para la tabla Asiento
INSERT INTO "Asiento" ("Numero", "X", "Y", "Ocupado", "Correo_usuario", "Matricula_avion")
VALUES
    (7, 1, 2, TRUE, 'usuario1@gmail.com', 'ABC123'),
    (8, 2, 2, TRUE, 'usuario2@yahoo.com', 'XYZ789'),
    (9, 3, 2, TRUE, 'user3@hotmail.com', 'MNO456');

-- Generar datos aleatorios para la tabla Promocion
INSERT INTO "Promocion" ("Id","Precio", "Fecha_inicio", "Fecha_final", "Imagen", "Id_ejecucion")
VALUES
    (4,50, '2023-10-15', '2023-10-30', 'promo1.jpg', 4),
    (5,60, '2023-11-01', '2023-11-15', 'promo2.jpg', 5),
    (6,70, '2023-11-10', '2023-11-25', 'promo3.jpg', 6);



-- Generar datos aleatorios para la tabla Viajexejecuciones
INSERT INTO "Viajexejecuciones" ("Id_ejecucion", "Id_viaje")
VALUES
    (4, 6),
    (5, 5),
    (6, 4);

-- Generar datos aleatorios para la tabla Tarjeta
INSERT INTO "Tarjeta" ("Numero", "Cs", "Vencimiento", "Correo_usuario")
VALUES
    ('1111222233334444', 123, '2024-12-31', 'usuario1@gmail.com'),
    ('5555666677778888', 456, '2025-06-30', 'usuario2@yahoo.com'),
    ('9999000011112222', 789, '2023-09-30', 'user3@hotmail.com');

-- Generar datos aleatorios para la tabla Escala
INSERT INTO "Escala" ("Id_viaje", "Id_aero")
VALUES
    (1, 'B002'),
    (2, 'C003'),
    (3, 'A001');
