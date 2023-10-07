--tabla de usuario
create table usuario(
	correo varchar(40) not null,
	contraseña varchar(20) not null,
	nombre_1 varchar(30),
	nombre_2 varchar(30),
	apellido_1 varchar(30),
	apellido_2 varchar(30),
	telefono int,
	chek_in bool,
	matricula_avion varchar(30),
	primary key(correo)
);

--tabla del avion
create table avion(
	matricula varchar(40),
	capacidad int,
	primary key(matricula)
);

--tabla de vuelos

create table vuelo(
	id int not null,
	origen varchar(30),
	destino varchar(30),
	aero_destino varchar(60),
	aero_origen varchar(60),
	hora time,
	precio int,
	puerta varchar(20),
	estado bool,
	matricula_avion varchar(30),
	primary key (id),
	foreign key (matricula_avion) references avion(matricula)
);

--tabla de estudiantes

create table estudiante(
	carnet varchar(30) not null,
	universidad varchar(60),
	correo_usario varchar(40) not null,
	primary key(carnet),
	foreign key(correo_usario) references usuario(correo)
);


--tabla de maletas
create table maleta(
	numero int not null,
	peso int,
	color varchar(20),
	matricula_avion varchar(30),
	correo_usuario varchar(40),
	primary key(numero),
	foreign key (matricula_avion) references avion(matricula),
	foreign key (correo_usuario) references usuario(correo)

);

--tabla de asientos
create table asiento(
	numero int not null,
	x int,
	y int,
	ocupado bool,
	correo_usuario varchar(40),
	matricula_avion varchar(40),
	primary key(numero),
	foreign key (matricula_avion) references avion(matricula),
	foreign key (correo_usuario) references usuario(correo)
	
);

--tabla de la entidad debil promocion

create table promocion(
	precio int,
	fecha_inicio date,
	fecha_final date,
	imagen varchar(1000),
	id_vuelo int,
	foreign key (id_vuelo) references vuelo(id)
);


--tabla de la entidad debil escala

create table escala(
	parada varchar(40),
	aero_parada varchar(40),
	num_parada int,
	id_vuelo int,
	foreign key (id_vuelo) references vuelo(id)
	
);

--tabla auxiliar que relaciona vuelos con usuarios

create table vueloxusario(
	id_vuelo int,
	correo_usuario varchar(40),
	foreign key (id_vuelo) references vuelo(id),
	foreign key (correo_usuario) references usuario(correo)
);

--tabla de las tarjetas del usuario

create table tarjeta(
	numero int not null,
	cs int,
	vencimiento date,
	correo_usuario varchar(40),
	primary key (numero),
	foreign key (correo_usuario) references usuario(correo)
);