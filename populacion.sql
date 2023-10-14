insert into vuelo(id,origen, destino,aero_origen, aero_destino)
values(1,'San José','Miami','Aeropuerto Juan Santa Maria','Aeropuerto Internacional de Miami');

insert into usuario(correo,contraseña)
values('jecruz@estudiantec.cr','admin');

insert into maleta(numero, peso)
values('01',10);

insert into avion(matricula)
values('A1');

insert into asiento(numero,x,y)
values(01,0,0);

insert into tarjeta(numero)
values(1077496143296480);

insert into vueloxusuario(id_vuelo,correo_usuario)
values(1,'jecruz@estudiantec.cr');

update vuelo
set matricula_avion='A1'
where id=1;

update maleta
set matricula_avion='A1'
where numero=1;

update maleta
set correo_usuario='jecruz@estudiantec.cr'
where numero=1;

update asiento
set matricula_avion='A1'
where numero=1;

update asiento
set correo_usuario='jecruz@estudiantec.cr'
where numero=1;

update tarjeta
set correo_usuario='jecruz@estudiantec.cr'
where numero=1077496143296480;






