insert into aero(id,ciudad,nombre)
values
	('SJO','San José','Aeropuerto Internacional Juan Santamaría'),
	('BAI','Buenos Aires','Aeropuerto de Buenos Aires'),
	('MIA','Miami','Aeropuerto Internacional de Miami'),
	('MEX','Ciudad de Mexico','Aeropuerto Internacional Benito Juárez de la Ciudad de Mexico'),
	('PTY','Ciudad de Panama','Aeropuerto Internacional de Tocumen');
	
insert into viaje(id,estado)
values
	(1,FALSE),
	(2,FALSE),
	(3,FALSE);

--vuelo directo a Miami
update viaje
set inicio='SJO',fin='MIA'
where id=1;

--vuelo directo a Argentina

update viaje
set inicio='SJO',fin='BAI'
where id=2;

--vuelo a Miami con escalas

update viaje
set inicio='SJO',fin='MIA'
where id=3;

insert into escala(id_viaje,id_aero)
values(3,'PTY');

--usuario administrador

insert into usuario(correo,contraseña,nombre_1,apellido_1,pasaporte)
values('admin@eropuerto.com','12345678','Jose','Cruz','123456789');

--aviones
insert into avion
values
	('B74701','Boeing747',366),
	('A32001','Airbus A320',140),
	('B78701','Boeing 787 Dreamliner',240);









	
